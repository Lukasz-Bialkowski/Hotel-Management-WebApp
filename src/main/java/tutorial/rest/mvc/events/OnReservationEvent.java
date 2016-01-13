package tutorial.rest.mvc.events;

import org.springframework.context.ApplicationEvent;
import tutorial.core.models.entities.Account;
import tutorial.core.models.entities.Reservation;

import java.util.Locale;

/**
 * Created by luke on 13.01.16.
 */
public class OnReservationEvent extends ApplicationEvent{

    private final Reservation reservation;
    private final String appUrl;
    private final Locale locale;
    private final String email;
    private final Long userId;

    public OnReservationEvent(Reservation reservation, Locale locale, String appUrl, String email, Long userId) {
        super(reservation);

        this.reservation = reservation;
        this.locale = locale;
        this.appUrl = appUrl;
        this.email = email;
        this.userId = userId;
    }

    public String getAppUrl() {
        return appUrl;
    }

    public Locale getLocale() {
        return locale;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public String getEmail() {
        return email;
    }

    public Long getUserId() {
        return userId;
    }

    @Override
    public String toString() {
        return "OnReservationEvent{" +
                "reservation=" + reservation +
                ", appUrl='" + appUrl + '\'' +
                ", locale=" + locale +
                ", email='" + email + '\'' +
                ", userId=" + userId +
                '}';
    }
}
