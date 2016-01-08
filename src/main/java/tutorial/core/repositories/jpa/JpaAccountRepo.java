package tutorial.core.repositories.jpa;

import org.springframework.stereotype.Repository;
import tutorial.core.models.entities.Account;
import tutorial.core.models.entities.Blog;
import tutorial.core.repositories.AccountRepo;
import tutorial.core.services.util.AccountList;
import tutorial.core.services.util.BlogList;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by Chris on 7/9/14.
 */
@Repository
public class JpaAccountRepo implements AccountRepo {

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Account> findAllAccounts() {
        Query query = em.createQuery("SELECT a FROM Account a");
        return query.getResultList();
    }

    @Override
    public Account findAccount(Long id) {
        return em.find(Account.class, id);
    }

    @Override
    public Account findAccountByLogin(String login) {
        Query query = em.createQuery("SELECT a FROM Account a WHERE a.login=?1");
        query.setParameter(1, login);
        List<Account> accounts = query.getResultList();
        if(accounts.size() == 0) {
            return null;
        } else {
            return accounts.get(0);
        }
    }

    @Override
    public Account createAccount(Account data) {
        em.persist(data);
        return data;
    }
}
