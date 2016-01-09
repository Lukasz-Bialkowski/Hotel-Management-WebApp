package tutorial.core.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import tutorial.core.crud.AbstractCRUDService;
import tutorial.core.models.entities.Account;
import tutorial.core.models.entities.Reservation;
import tutorial.core.models.entities.ReservationStatus;
import tutorial.core.services.ReservationsService;
import tutorial.core.springdatarepo.AccountsRepository;
import tutorial.core.springdatarepo.ReservationsRepository;

import java.util.List;

/**
 * Created by luke on 08.01.16.
 */
@Service
public class DefaultReservationService extends AbstractCRUDService<Reservation> implements ReservationsService {

    @Autowired
    ReservationsRepository reservationsRepository;

    @Autowired
    AccountsRepository accountsRepository;

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

    @Override
    public Reservation addReservationToUser(Long id, Reservation reservation) {
        Account owner = accountsRepository.findOne(id);
        owner.getReservations().add(reservation);
        Account persistedAccount = accountsRepository.save(owner);

        int indeks = persistedAccount.getReservations().size()-1;
        return persistedAccount.getReservations().get(indeks);
    }
}
