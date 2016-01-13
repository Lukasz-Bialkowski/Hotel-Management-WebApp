package tutorial.core.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import tutorial.core.crud.AbstractCRUDService;
import tutorial.core.models.entities.Account;
import tutorial.core.models.entities.VerificationToken;
import tutorial.core.services.AccountsService;
import tutorial.core.springdatarepo.AccountsRepository;
import tutorial.core.springdatarepo.VerificationTokenRepository;

/**
 * Created by luke on 06.01.16.
 */
@Service
public class DefaultAccountsService extends AbstractCRUDService<Account> implements AccountsService {

    @Autowired
    private AccountsRepository accountsRepository;

    @Autowired
    VerificationTokenRepository verificationTokenRepository;

    @Override
    protected JpaRepository<Account, Long> getRepository() {
        return accountsRepository;
    }

    @Override
    public Account create() {
        return new Account();
    }

    @Override
    public Account findByLogin(String login) {
        return accountsRepository.findByLogin(login);
    }

    @Override
    public void createVerificationToken(Account account, String token) {
        VerificationToken myToken = new VerificationToken(token, account);
        verificationTokenRepository.save(myToken);
    }

    @Override
    public void saveRegisteredUser(Account account) {
        accountsRepository.save(account);
    }

    @Override
    public VerificationToken getVerificationToken(String VerificationToken) {
        return verificationTokenRepository.findByToken(VerificationToken);
    }

    @Override
    public Account getAccountById(Long id){
        return accountsRepository.findOne(id);
    }
}
