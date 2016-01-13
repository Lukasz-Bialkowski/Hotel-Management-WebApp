package tutorial.core.repositories;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;
import tutorial.core.models.entities.*;
import tutorial.core.services.AccountsService;

import java.util.Date;

import static org.junit.Assert.*;

/**
 * Created by Chris on 7/9/14.
 */

/** ByDefault Hibernate zachowuje zmiany pomiedzy testami w pamieci bazy(rollback=false)
 * Jesli natomiast dodamy adnotacje Transactional to sprzatamy baze po kazdym tescie(rollback=true)*/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring/business-config.xml")
@Transactional
public class AccountRepoTest {

    @Autowired
    AccountsService accountsService;

    private Account account;

    @Test
    public void accountShouldContainProperNumberOfReservations() {

        /** Pierwsza rezerwacja */
        Room room = new Room();
        room.setRoomNr(12);
        room.setStandard(RoomStandard.NORMALNY);

        Reservation historyReservation = new Reservation();
        historyReservation.setStatus(ReservationStatus.ZAKONCZONA);
        historyReservation.setRoom(room);
        historyReservation.setStartDate(new Date());
        historyReservation.setTotalCost(12.3);

        /** Druga rezerwacja */
        room = new Room();
        room.setRoomNr(16);
        room.setStandard(RoomStandard.WYSOKI);

        Reservation currentReservation = new Reservation();
        currentReservation.setStatus(ReservationStatus.AKTYWNA);
        currentReservation.setRoom(room);
        currentReservation.setStartDate(new Date());
        currentReservation.setTotalCost(12.3);

        /** Trzecia rezerwacja */
        room = new Room();
        room.setRoomNr(136);
        room.setStandard(RoomStandard.WYSOKI);

        Reservation currentReservation2 = new Reservation();
        currentReservation2.setStatus(ReservationStatus.AKTYWNA);
        currentReservation2.setRoom(room);
        currentReservation2.setStartDate(new Date());
        currentReservation2.setTotalCost(12.3);


        Account user1 = new Account();
        user1.setLogin("Pierwszy");
        user1.getReservations().add(historyReservation);
        user1.getReservations().add(currentReservation);

        Account user2 = new Account();
        user2.getReservations().add(currentReservation2);
        user2.setLogin("Drugi");

        Account account1 = accountsService.save(user1);
        Account account2 = accountsService.save(user2);

        assertTrue(accountsService.findByLogin(account1.getLogin()).getReservations().size() == 2);
        assertTrue(accountsService.findByLogin(account2.getLogin()).getReservations().size() == 1);

        assertEquals(accountsService.get(account2.getId()).getReservations().iterator().next().getRoom().getStandard(), RoomStandard.WYSOKI);

    }

    @Test
    public void accountPersistedWithAddedIdAndProperProperties()
    {
        account = new Account();
        account.setLogin("login");
        account.setPassword("password");

        /** przed zapisem konto nie ma przypisanego ID */
        assertNull(account.getId());

        accountsService.save(account);

        account = accountsService.findByLogin(account.getLogin());
        assertNotNull(account);
        assertEquals(account.getLogin(), "login");
        assertEquals(account.getPassword(), "password");

        /** przed zapisem konto nie ma przypisanego ID */
        assertNotNull(account.getId());
    }

}
