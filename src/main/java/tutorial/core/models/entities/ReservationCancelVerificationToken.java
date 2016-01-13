package tutorial.core.models.entities;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by luke on 13.01.16.
 */
@Entity
public class ReservationCancelVerificationToken {

    private static final int EXPIRATION = 60 * 24;
    private boolean verified = false;

    @Id
    @GeneratedValue
    private Long id;

    private String token;

    @OneToOne(targetEntity = Reservation.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "reservation_id")
    private Reservation reservation;

    private Date expiryDate;

    public ReservationCancelVerificationToken() {
        super();
    }
    public ReservationCancelVerificationToken(String token, Reservation reservation) {
        super();
        this.token = token;
        this.reservation = reservation;
        this.expiryDate = calculateExpiryDate(EXPIRATION);
        this.verified = false;
    }

    private Date calculateExpiryDate(int expiryTimeInMinutes) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Timestamp(cal.getTime().getTime()));
        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
        return new Date(cal.getTime().getTime());
    }

    public static int getEXPIRATION() {
        return EXPIRATION;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

}
