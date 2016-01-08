package tutorial.core.springdatarepo;

import org.springframework.data.jpa.repository.JpaRepository;
import tutorial.core.models.entities.Reservation;
import tutorial.core.models.entities.ReservationStatus;

import java.util.List;

/**
 * Created by luke on 08.01.16.
 */
public interface ReservationsRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByStatusNot(ReservationStatus status);

    List<Reservation> findByStatus(ReservationStatus status);

}
