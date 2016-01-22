package tutorial.rest.mvc.events.listeners;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import tutorial.core.models.entities.Account;
import tutorial.core.services.AccountsService;
import tutorial.core.services.EmailSender;
import tutorial.core.services.StaticTemplates;
import tutorial.rest.mvc.events.OnRegistrationCompleteEvent;

import java.util.UUID;
/**
 * Sluchacz zdarzen rejestracji.
 * Kazde zdarzenie wyzwala uaktywnienie metody onApplicationEvent
 *
 * @author Lukasz Bialkowski
 * @version 1.0
 * @see tutorial.rest.mvc.AccountDetailsController
 * @see OnRegistrationCompleteEvent
 * @see StaticTemplates
 * @see ApplicationListener
 */
@Component
public class RegistrationListener implements ApplicationListener<OnRegistrationCompleteEvent> {
    /**
     * Serwis zarzadzajacy kontami uzytkownika.
     * Obsluguje operacje CRUD i realizuje logike biznesowa.
     *
     * @see AccountsService
     */
    @Autowired
    private AccountsService accountsService;

    /**
     * Serwis obslugujacy tworzenie maili generowanych z szablonow oraz ich wysylanie.
     *
     * @see EmailSender
     */
    @Autowired
    EmailSender emailSender;
    /**
     * Metoda wyzwalana przy kazdym zaistnieniu zdarzenia rejestracji.
     *
     * @param  event Zdarzenie rejestracji przesylane w parametrze enkapsulujace dane rejestracji.
     * @see        OnRegistrationCompleteEvent
     */
    @Override
    public void onApplicationEvent(OnRegistrationCompleteEvent event) {
        this.activationMail(event);
    }

    /**
     * Odpowiada za wygenerowanie tokena weryfikacyjnego niezbednego w procesie aktywacji konta użytkownika.
     * Wygenerowany token jest wykorzystywany do utworzenia linku aktywacyjnego, przesylanego w mailu do uzytkownika.
     *
     * @param  event Zdarzenie rejestracji przesylane w parametrze enkapsulujace dane rejestracji.
     * @see        EmailSender
     * @see        AccountsService
     * @see Account
     */
    private void activationMail(OnRegistrationCompleteEvent event) {
        Account account = event.getAccount();
        String token = UUID.randomUUID().toString();
        accountsService.createVerificationToken(account, token);
        String recipientAddress = account.getEmail();
        String subject = StaticTemplates.REGISTRATION_ACTIVATION_EMAIL_TITLE;
        String confirmationUrl = event.getAppUrl() + "/rest/account/regitrationConfirm/" + token;
        String link = "http://localhost:8080" + confirmationUrl;

        System.out.println("Link aktywacyjny: " + link);
        System.out.println("Przed aktywacja konta: "+ account);
        emailSender.sendActivationEmail(recipientAddress, subject, StaticTemplates.generateRegistrationActivationEmailContent(account.getLogin(), link));
    }
}