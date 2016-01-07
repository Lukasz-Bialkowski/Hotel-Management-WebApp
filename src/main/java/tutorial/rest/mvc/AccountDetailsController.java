package tutorial.rest.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import tutorial.core.crud.CRUDController;
import tutorial.core.crud.CRUDService;
import tutorial.core.models.entities.Account;
import tutorial.core.services.UserDetailsService;

/**
 * Created by luke on 06.01.16.
 */

@Controller
@RequestMapping("/rest/account")
public class AccountDetailsController extends CRUDController<Account> {

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected CRUDService<Account> getService() {
        return userDetailsService;
    }
}
