package tutorial.core.repositories;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;
import tutorial.core.models.entities.Reservation;
import tutorial.core.models.entities.ReservationStatus;
import tutorial.core.models.entities.Room;
import tutorial.core.models.entities.RoomStandard;
import tutorial.core.services.ReservationsService;

import java.util.Date;
import java.util.List;

/**
 * Created by luke on 08.01.16.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring/business-config.xml")
@Transactional
public class ReservationsTest {

    @Autowired
    ReservationsService service;

    @Test
    public void repoShouldReturnOneReservation() {
        Room room = new Room();
        room.setRoomNr(12);
        room.setStandard(RoomStandard.NORMALNY);

        Reservation historyReservation = new Reservation();
        historyReservation.setStatus(ReservationStatus.ZAKONCZONA);
        historyReservation.setRoom(room);
        historyReservation.setStartDate(new Date());
        historyReservation.setTotalCost(12.3);

        room = new Room();
        room.setRoomNr(16);
        room.setStandard(RoomStandard.WYSOKI);

        Reservation currentReservation = new Reservation();
        currentReservation.setStatus(ReservationStatus.AKTYWNA);
        currentReservation.setRoom(room);
        currentReservation.setStartDate(new Date());
        currentReservation.setTotalCost(12.3);

        historyReservation = service.save(historyReservation);
        currentReservation = service.save(currentReservation);
        service.save(new Reservation());

        List<Reservation> currentReservations = service.getCurrentReservations();
        List<Reservation> historyReservations = service.getHistoryReservations();
        System.out.println(historyReservations.iterator().next());

        ObjectMapper objectMapper = new ObjectMapper();
        try {
            System.out.println(objectMapper.writeValueAsString(currentReservation));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        Assert.assertTrue(historyReservations.size() == 1);
        Assert.assertTrue(currentReservations.size() >= 1);

        Assert.assertEquals(currentReservations.iterator().next().getId() , currentReservation.getId());
        Assert.assertEquals(historyReservations.get(0).getId() , historyReservation.getId());
    }
}
