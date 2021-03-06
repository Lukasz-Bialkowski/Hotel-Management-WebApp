package tutorial.core.repositories;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import tutorial.core.models.entities.Account;
import tutorial.core.springdatarepo.AccountsRepository;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

/**
 * Created by luke on 06.01.16.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring/business-config.xml")
public class UserDetailsControllerITest {

    @Autowired
    AccountsRepository accountsRepository;

    @Test
    public void getExistingAccount() throws Exception {
        Account foundAccount = new Account();
        foundAccount.setId(1L);
        foundAccount.setPassword("testowy");
        foundAccount.setLogin("testowy");

        accountsRepository.save(foundAccount);

        Account test = accountsRepository.findByLoginContaining("estow");

        Assert.assertEquals(test.getLogin(), foundAccount.getLogin());
    }
}
