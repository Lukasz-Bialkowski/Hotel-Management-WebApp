package tutorial.unit;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.context.request.WebRequest;
import tutorial.core.models.entities.Account;
import tutorial.core.services.AccountsService;
import tutorial.rest.mvc.AccountDetailsController;
import tutorial.rest.mvc.events.OnRegistrationCompleteEvent;

import java.util.Locale;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class EmailSenderTest {

    @Mock
    AccountsService accountsService;

    @Mock
    ApplicationEventPublisher eventPublisher;

    /** Ten mock wcale nie jest polem injectowanego obiektu, wiec mockito leci to tych mockach i te ktore
     * moze wrzuca jako pola- reszte zostawia */
    @Mock
    WebRequest webRequest;

    @InjectMocks
    AccountDetailsController controller = new AccountDetailsController();

    @Test
    public void emailSendingEventTriggeredWhileReservation() {

        Account account = new Account();
        account.setLogin("login");
        account.setPassword("password");

        /** Gdzies na spodzie byl generowany nullpointer. Pamietaj by przesledzic cala sciezke przed mockowaniem */
        when(accountsService.save(any(Account.class))).thenReturn(account);
        controller.registerUserAccount(account,webRequest);

        verify(eventPublisher).publishEvent(Mockito.any(OnRegistrationCompleteEvent.class));
    }

}
