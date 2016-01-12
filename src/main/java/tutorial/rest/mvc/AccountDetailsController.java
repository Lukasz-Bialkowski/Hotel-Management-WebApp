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

@Controller
@RequestMapping("/rest/account")
public class AccountDetailsController extends CRUDController<Account> {

    @Autowired
    private AccountsService accountsService;

    @RequestMapping(method = {RequestMethod.GET}, value = "/credentials")
    @ResponseBody
    public Account getAccountByLogin(@RequestParam("login") String login) {
        return this.accountsService.findByLogin(login);
    }

    @Override
    protected CRUDService<Account> getService() {
        return accountsService;
    }

    @Autowired
    ApplicationEventPublisher eventPublisher;

    @RequestMapping(value = "registration", method = RequestMethod.POST)
    public @ResponseBody Account registerUserAccount(@RequestBody Account accountDto,
                                       WebRequest request) {

        Account registered = this.save(accountDto);

        try {
            String appUrl = request.getContextPath();
            eventPublisher.publishEvent(new OnRegistrationCompleteEvent
                    (registered, request.getLocale(), appUrl));
        } catch (Exception me) {
            System.out.println(me);
        }
        return registered;
    }

    @RequestMapping(value = "/regitrationConfirm/{token}", method = RequestMethod.GET)
    public String confirmRegistration
            (WebRequest request, @PathVariable("token") String token) {
//        Locale locale = request.getLocale();

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
