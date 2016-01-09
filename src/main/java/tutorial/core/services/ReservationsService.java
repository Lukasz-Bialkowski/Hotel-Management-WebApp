package tutorial.core.services;

import tutorial.core.crud.CRUDService;
import tutorial.core.models.entities.Reservation;

import java.util.List;

/**
 * Created by luke on 08.01.16.
 */
public interface ReservationsService extends CRUDService<Reservation> {

    List<Reservation> getCurrentReservations();

    List<Reservation> getHistoryReservations();

    Reservation addReservationToUser(Long id, Reservation reservation);

    void removeForAccount(Long id,Long resId);

}
