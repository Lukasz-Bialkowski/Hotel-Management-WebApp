package tutorial.core.springdatarepo;

import org.springframework.data.jpa.repository.JpaRepository;
import tutorial.core.models.entities.Account;
import tutorial.core.models.entities.VerificationToken;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

    VerificationToken findByToken(String token);

}