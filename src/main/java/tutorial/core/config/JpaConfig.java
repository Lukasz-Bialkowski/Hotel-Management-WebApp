package tutorial.core.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import tutorial.core.springdatarepo.AccountsRepository;

/**
 * Created by luke on 06.01.16.
 */
@Configuration
@EnableJpaRepositories(basePackageClasses = {AccountsRepository.class})
@EnableTransactionManagement
public class JpaConfig {

}
