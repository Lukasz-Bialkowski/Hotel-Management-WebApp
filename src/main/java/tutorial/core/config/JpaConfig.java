package tutorial.core.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import tutorial.core.services.UserDetailsService;
import tutorial.core.springdatarepo.AccountsRepository;
import tutorial.rest.mvc.AccountDetailsController;

/**
 * Created by luke on 06.01.16.
 */
@Configuration
@EnableJpaRepositories(basePackageClasses = {AccountsRepository.class})
@EnableTransactionManagement
public class JpaConfig {

}
