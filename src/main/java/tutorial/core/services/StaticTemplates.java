package tutorial.core.services;

import org.springframework.context.ApplicationEventPublisher;
import tutorial.core.models.entities.Account;

/**
 * Fabryka danych statycznych.
 * <p>
 * Uzywane w wielu miejscach aplikacji i dostepne z kazdego miejsca przez odniesienia statyczne.
 *
 * @author Lukasz Bialkowski
 * @version 1.0
 * @see tutorial.rest.mvc.AccountDetailsController
 * @see tutorial.rest.mvc.events.OnRegistrationCompleteEvent
 * @see tutorial.rest.mvc.events.listeners.RegistrationListener
 */
public class StaticTemplates {

    /**
     * Tytul maila aktywacyjnego konto uzytkownika.
     */
    public static final String REGISTRATION_ACTIVATION_EMAIL_TITLE = "Aktywacja w Hotelu pod Roza";
    /**
     * Tytul maila aktywacyjnego anulowanie rezerwacji.
     */
    public static final String RESERVATION_CANCELLING_ACTIVATION_EMAIL_TITLE = "Aktywacja anulowania rezerwacji w Hotelu pod Roza";

    /**
     * Generuje zawartość wiadomosci aktywujacej konto użytkownika.
     *
     * @param  link Wygenerowany link aktywujacy anulowanie rezerwacji.
     * @param login Ciag znakow, oznaczajacy login użytkownika.
     * @return      Zawartosc wiadomości email.
     * @see        EmailSender
     * @see        AccountsService
     */
    public static String generateRegistrationActivationEmailContent(String login, String link){
        String content =
                "Drogi " + "Dariuszu" + ",\n\n"
                + "Dziękujemy za rejestracje w systemie.\n"
                + "Aby aktywować konto kliknij link poniżej. \n"
                + link + "\n"
                + "Życzymy udanego pobytu w hotelu.\n\n"
                + "---------------\n\n"
                + "Obsługa hotelu";
        return content;
    };

    /**
     * Generuje zawartosc wiadomosci aktywacyjnej anulowanie rezerwacji z wykorzystaniem parametru.
     *
     * @param  link Wygenerowany link aktywujacy anulowanie rezerwacji.
     * @return      Zawartosc wiadomosci email.
     * @see        EmailSender
     * @see        AccountsService
     */
    public static String generateReservationActivationEmailContent(String link){
        String content =
                "Drogi Dariuszu,\n\n"
                        + "Aby aktywować anulowanie rezerwacji kliknij link poniżej. \n"
                        + link + "\n"
                        + "Pozdrawiamy.\n\n"
                        + "---------------\n\n"
                        + "Obsługa hotelu";
        return content;
    };
}
