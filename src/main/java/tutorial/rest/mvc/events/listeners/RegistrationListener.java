package tutorial.rest.mvc.events.listeners;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import tutorial.core.models.entities.Account;
import tutorial.core.services.AccountsService;
import tutorial.core.services.EmailSender;
import tutorial.core.services.StaticTemplates;
import tutorial.rest.mvc.events.OnRegistrationCompleteEvent;

import java.util.UUID;

@Component
public class RegistrationListener implements ApplicationListener<OnRegistrationCompleteEvent> {

    @Autowired
    private AccountsService accountsService;
    @Autowired
    EmailSender emailSender;

    @Override
    public void onApplicationEvent(OnRegistrationCompleteEvent event) {
        this.activationMail(event);
    }

    private void activationMail(OnRegistrationCompleteEvent event) {
        Account account = event.getAccount();
        String token = UUID.randomUUID().toString();
        accountsService.createVerificationToken(account, token);
        System.out.println(account);
        String recipientAddress = account.getEmail();
        String subject = StaticTemplates.ACTIVATION_EMAIL_TITLE;
        String confirmationUrl = event.getAppUrl() + "/rest/account/regitrationConfirm/" + token;
        String link = "http://localhost:8080" + confirmationUrl;

        emailSender.sendActivationEmail(recipientAddress, subject, StaticTemplates.generateEmailContent(account.getLogin(), link));
    }
}