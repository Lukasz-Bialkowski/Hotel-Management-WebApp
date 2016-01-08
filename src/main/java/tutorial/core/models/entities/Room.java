package tutorial.core.models.entities;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by luke on 08.01.16.
 */
@Entity
public class Room implements Serializable {

    @Id
    @GeneratedValue
    Long id;

    Integer roomNr;

    @Enumerated(EnumType.STRING)
    RoomStandard standard;

    /** ============================ */


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getRoomNr() {
        return roomNr;
    }

    public void setRoomNr(Integer roomNr) {
        this.roomNr = roomNr;
    }

    public RoomStandard getStandard() {
        return standard;
    }

    public void setStandard(RoomStandard standard) {
        this.standard = standard;
    }
}
