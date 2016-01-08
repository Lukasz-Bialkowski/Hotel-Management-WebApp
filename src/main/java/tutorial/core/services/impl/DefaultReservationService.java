package tutorial.core.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import tutorial.core.crud.AbstractCRUDService;
import tutorial.core.models.entities.Reservation;
import tutorial.core.models.entities.ReservationStatus;
import tutorial.core.services.ReservationsService;
import tutorial.core.springdatarepo.ReservationsRepository;

import java.util.List;

/**
 * Created by luke on 08.01.16.
 */
@Service
public class DefaultReservationService extends AbstractCRUDService<Reservation> implements ReservationsService {

    @Autowired
    ReservationsRepository reservationsRepository;

    @Override
    protected JpaRepository<Reservation, Long> getRepository() {
        return reservationsRepository;
    }

    @Override
    public Reservation create() {
        return new Reservation();
    }

    @Override
    public List<Reservation> getCurrentReservations() {
        return reservationsRepository.findByStatusNot(ReservationStatus.ZAKONCZONA);
    }

    @Override
    public List<Reservation> getHistoryReservations() {
        return reservationsRepository.findByStatus(ReservationStatus.ZAKONCZONA);
    }
}
