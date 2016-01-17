package tutorial.rest.mvc.events;

import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationEventPublisher;
import tutorial.core.models.entities.Account;
import tutorial.core.services.StaticTemplates;

import java.util.Locale;

/**
 * Encja reprezentujaca zdarzenie wygenerowane po udanej rejestracji.
 * Dane, ktore enkapsuluje sa przekazywane do sluchacza zdarzenia.
 *
 * @author Lukasz Bialkowski
 * @version 1.0
 * @see tutorial.rest.mvc.events.listeners.RegistrationListener
 * @see tutorial.rest.mvc.AccountDetailsController
 * @see StaticTemplates
 * @see ApplicationEvent
 */
public class OnRegistrationCompleteEvent extends ApplicationEvent {
    /**
     * Ciag znakow oznaczajacy sciezke kontekstu aplikacji serwera.
     *
     * @see ApplicationEventPublisher
     * @see tutorial.rest.mvc.events.listeners.RegistrationListener
     */
    private final String appUrl;
    /**
     * Przechowuje dane na temat obecnych ustawien systemowych uzytkownika.
     *
     * @see Locale
     */
    private final Locale locale;
    /**
     * Encja, ktora enkapsuluje dane uzytkownika do persystowania i przetwarzania w systemie.
     *
     * @see Account
     */
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