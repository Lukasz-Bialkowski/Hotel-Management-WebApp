package tutorial.rest.mvc.events.listeners;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import tutorial.core.models.entities.Reservation;
import tutorial.core.services.AccountsService;
import tutorial.core.services.EmailSender;
import tutorial.core.services.ReservationsService;
import tutorial.core.services.StaticTemplates;
import tutorial.rest.mvc.events.OnReservationEvent;

import java.util.UUID;

/**
 * Created by luke on 13.01.16.
 */

@Component
public class ReservationListener implements ApplicationListener<OnReservationEvent> {

    @Autowired
    private ReservationsService service;
    @Autowired
    EmailSender emailSender;

    @Override
    public void onApplicationEvent(OnReservationEvent onReservationEvent) {
        this.activationMail(onReservationEvent);
    }

    private void activationMail(OnReservationEvent event) {
        Reservation reservation = event.getReservation();
        String token = UUID.randomUUID().toString();
        service.createVerificationToken(reservation, token);
        String recipientAddress = event.getEmail();
        String subject = StaticTemplates.RESERVATION_CANCELLING_ACTIVATION_EMAIL_TITLE;
        String confirmationUrl = event.getAppUrl() + "/rest/profile/reservations/" + event.getUserId().toString() + "/cancel/" + token;
        String link = "http://localhost:8080" + confirmationUrl;

        System.out.println("Link aktywacyjny: " + link);
        System.out.println("Przed aktywacja konta: "+ reservation);
        emailSender.sendActivationEmail(recipientAddress, subject, StaticTemplates.generateReservationActivationEmailContent(link));
    }
}
