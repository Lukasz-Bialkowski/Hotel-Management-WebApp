package tutorial.core.services;

import tutorial.core.crud.CRUDService;
import tutorial.core.models.entities.Account;
import tutorial.core.models.entities.VerificationToken;

/**
 * Created by luke on 06.01.16.
 */
public interface AccountsService extends CRUDService<Account> {

    Account findByLogin(String login);

    void createVerificationToken(Account account, String token);

    void saveRegisteredUser(Account account);

    VerificationToken getVerificationToken(String VerificationToken);

    public Account getAccountById(Long id);
}
