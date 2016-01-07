package tutorial.core.springdatarepo;

import org.springframework.data.jpa.repository.JpaRepository;
import tutorial.core.models.entities.Account;

/**
 * Created by luke on 06.01.16.
 */
public interface AccountsRepository extends JpaRepository<Account, Long> {

    Account findByNameContaining(String name);
}
