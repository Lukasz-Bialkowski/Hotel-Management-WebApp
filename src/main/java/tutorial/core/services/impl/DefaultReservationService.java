package tutorial.core.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import tutorial.core.crud.AbstractCRUDService;
import tutorial.core.models.entities.*;
import tutorial.core.services.ReservationsService;
import tutorial.core.springdatarepo.AccountsRepository;
import tutorial.core.springdatarepo.ReservationCancelTokenRepository;
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

    @Autowired
    ReservationCancelTokenRepository tokenRepository;

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

    @Override
    public void removeForAccount(Long id, Long resId) {
        Account owner = accountsRepository.findOne(id);
        int global=-1;
        for(int i =0; i<owner.getReservations().size();i++){
            if(owner.getReservations().get(i).getId().equals(resId)){
                global = i;
            }
        }
        if(global!=-1)
            owner.getReservations().remove(global);
        accountsRepository.save(owner);
    }

    @Override
    public Reservation getReservationById(Long id) {
        return reservationsRepository.findOne(id);
    }

    @Override
    public void createVerificationToken(Reservation reservation, String token) {
        ReservationCancelVerificationToken myToken = new ReservationCancelVerificationToken(token, reservation);
        tokenRepository.save(myToken);
    }

    @Override
    public ReservationCancelVerificationToken getVerificationToken(String VerificationToken) {
        return tokenRepository.findByToken(VerificationToken);
    }
}
