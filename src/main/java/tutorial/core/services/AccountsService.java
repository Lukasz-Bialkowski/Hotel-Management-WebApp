package tutorial.core.services;

import tutorial.core.crud.CRUDService;
import tutorial.core.models.entities.Account;

/**
 * Created by luke on 06.01.16.
 */
public interface AccountsService extends CRUDService<Account> {

    Account findByLogin(String login);
}
