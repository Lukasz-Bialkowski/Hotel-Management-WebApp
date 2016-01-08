package tutorial.core.models.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by luke on 08.01.16.
 */
@Entity
public class Reservation implements Serializable{

    @Id
    @GeneratedValue
    Long id;

    @Temporal( TemporalType.DATE )
    Date startDate;

    @Temporal( TemporalType.DATE )
    Date endDate;

    Double totalCost;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Room room;

    @Enumerated(EnumType.STRING)
    ReservationStatus status;

    /** ============================ */


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public ReservationStatus getStatus() {
        return status;
    }

    public void setStatus(ReservationStatus status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", totalCost=" + totalCost +
                ", room=" + room +
                ", status=" + status +
                '}';
    }
}
