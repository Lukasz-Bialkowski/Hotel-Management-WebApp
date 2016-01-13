package tutorial.core.springdatarepo;

import org.springframework.data.jpa.repository.JpaRepository;
import tutorial.core.models.entities.ReservationCancelVerificationToken;
import tutorial.core.models.entities.VerificationToken;

/**
 * Created by luke on 13.01.16.
 */
public interface ReservationCancelTokenRepository extends JpaRepository<ReservationCancelVerificationToken, Long> {

    ReservationCancelVerificationToken findByToken(String token);

}
