package tutorial.unit;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.context.request.WebRequest;
import tutorial.core.models.entities.Account;
import tutorial.core.models.entities.VerificationToken;
import tutorial.core.services.AccountsService;
import tutorial.rest.mvc.AccountDetailsController;

import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
@ContextConfiguration("classpath:spring/business-config.xml")
public class ActivationTest {

    @Mock
    AccountsService service;

    @InjectMocks
    AccountDetailsController controller = new AccountDetailsController();

    private static final String TEST_VALIDATION_TOKEN = "test-345";

    @Test
    public void accountShouldChangeEnabledPropertyAfterActivating() {
        Account account = Mockito.mock(Account.class);

        account.setEnabled(false);
        account.setLogin("TestLogin");

        WebRequest request = Mockito.mock(WebRequest.class);
        when(service.getVerificationToken(anyString())).thenReturn(new VerificationToken(TEST_VALIDATION_TOKEN, account));

        controller.confirmRegistration(request, "anyString");

        verify(account).setEnabled(true);
    }

}
