package tutorial.core.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import tutorial.core.crud.AbstractCRUDService;
import tutorial.core.models.entities.Account;
import tutorial.core.services.UserDetailsService;
import tutorial.core.springdatarepo.AccountsRepository;

/**
 * Created by luke on 06.01.16.
 */
@Service
public class DefaultUserDetailsService extends AbstractCRUDService<Account> implements UserDetailsService{

    @Autowired
    private AccountsRepository accountsRepository;

    @Override
    protected JpaRepository<Account, Long> getRepository() {
        return accountsRepository;
    }

    @Override
    public Account create() {
        return new Account();
    }
}
