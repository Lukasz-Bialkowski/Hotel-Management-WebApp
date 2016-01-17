package tutorial.rest.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import tutorial.core.crud.CRUDController;
import tutorial.core.crud.CRUDService;
import tutorial.core.models.entities.Account;
import tutorial.core.models.entities.VerificationToken;
import tutorial.core.services.AccountsService;
import tutorial.core.services.EmailSender;
import tutorial.core.services.StaticTemplates;
import tutorial.rest.mvc.events.OnRegistrationCompleteEvent;

import java.util.Calendar;
import java.util.Locale;

/**
 * Jest glownym kontrolerem obslugujacym rządania zwiazane z kontami uzytkownika.
 * Nasluchuje na sciezce '/rest/account/'
 *
 * @author Lukasz Bialkowski
 * @version 1.0
 * @see OnRegistrationCompleteEvent
 * @see StaticTemplates
 * @see tutorial.rest.mvc.events.listeners.RegistrationListener
 */
@Controller
@RequestMapping("/rest/account")
public class AccountDetailsController extends CRUDController<Account> {

    /**
     * Serwis zarzadzajacy kontami uzytkownika.
     * Obsluguje operacje CRUD i realizuje logike biznesowa.
     *
     * @see AccountsService
     */
    @Autowired
    private AccountsService accountsService;

    /**
     * Serwis, ktory odpowiada za proces wysylania maila.
     *
     * @see ApplicationEventPublisher
     * @see OnRegistrationCompleteEvent
     * @see tutorial.rest.mvc.events.listeners.RegistrationListener
     */
    @Autowired
    ApplicationEventPublisher eventPublisher;

    /**
     * Metoda nasluguje na rzadania na sciezce 'rest/account/credentials/'.
     * Odszukuje z wykorzystaniem serwisu konta uzytkownikow o podanym w parametrze loginie.
     *
     * @param  login Ciag znakow oznaczajacy login uzytkownika
     * @return      Konto uzytkownika o odpowiadającym loginie.
     * @see        RequestBody
     * @see        RequestParam
     * @see        RequestMapping
     */
    @RequestMapping(method = {RequestMethod.GET}, value = "/credentials")
    @ResponseBody
    public Account getAccountByLogin(@RequestParam("login") String login) {
        return this.accountsService.findByLogin(login);
    }

    @Override
    protected CRUDService<Account> getService() {
        return accountsService;
    }

    /**
     * Metoda nasluguje na rzadania na sciezce 'rest/account/registration/'.
     * Rejestruje w konto uzytkownika w bazie danych.
     *
     * @param  accountDto Obiekt konta uzytkownika, ktory ma byc zapisany w bazie.
     * @param request Obiekt bedacy reprezentacja zadania HTTP.
     * @return      Konto uzytkownika z nadanym identyfikatorem.
     * @see        RequestBody
     * @see        RequestParam
     * @see        RequestMethod
     * @see        RequestMapping
     */
    @RequestMapping(value = "registration", method = RequestMethod.POST)
    public @ResponseBody Account registerUserAccount(@RequestBody Account accountDto, WebRequest request) {

        Account registered = this.save(accountDto);

        try {
            String appUrl = request.getContextPath();
            OnRegistrationCompleteEvent event = new OnRegistrationCompleteEvent(registered, request.getLocale(), appUrl);

            eventPublisher.publishEvent(event);
        } catch (Exception me) {
            System.out.println(me);
        }
        return registered;
    }

    /**
     * Metoda nasluguje na rzadania na sciezce '/regitrationConfirm/'.
     * Aktywuje status konta uzytkownika o tokenie walidacyjnym odpowiadajacym
     * przesłanemu parametrowi.
     *
     * @param token Ciag znakow bedacym tokenem walidacyjnym potrzebnym do aktywacji konta.
     * @param request Obiekt bedacy reprezentacja zadania HTTP.
     * @return     Przekierowanie na potwierdzenie aktywacji.
     * @see        WebRequest
     * @see        RequestMethod
     * @see        PathVariable
     */
    @RequestMapping(value = "/regitrationConfirm/{token}", method = RequestMethod.GET)
    public String confirmRegistration(WebRequest request, @PathVariable("token") String token) {

        VerificationToken verificationToken = accountsService.getVerificationToken(token);
        if (verificationToken == null) {
//            String message = messages.getMessage("auth.message.invalidToken", null, locale);
//            model.addAttribute("message", message);
//            return "redirect:/badUser.html?lang=" + locale.getLanguage();
        }

        Account account= verificationToken.getAccount();
        Calendar cal = Calendar.getInstance();
        if ((verificationToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0) {
//            model.addAttribute("message", messages.getMessage("auth.message.expired", null, locale));
//            return "redirect:/badUser.html?lang=" + locale.getLanguage();
        }
        account.setEnabled(true);
        accountsService.saveRegisteredUser(account);
        System.out.println(account);
        return "redirect:/index.html#/login";
    }
}
