package tutorial.rest.mvc.events;

import org.springframework.context.ApplicationEvent;
import tutorial.core.models.entities.Account;

import java.util.Locale;

public class OnRegistrationCompleteEvent extends ApplicationEvent {
    private final String appUrl;
    private final Locale locale;
    private final Account account;

    public OnRegistrationCompleteEvent(Account account, Locale locale, String appUrl) {
        super(account);

        this.account = account;
        this.locale = locale;
        this.appUrl = appUrl;
    }

    public String getAppUrl() {
        return appUrl;
    }

    public Locale getLocale() {
        return locale;
    }

    public Account getAccount() {
        return account;
    }
}