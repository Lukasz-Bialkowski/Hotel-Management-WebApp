package tutorial.core.services;

/**
 * Created by luke on 10.01.16.
 */
public class StaticTemplates {

    public static final String REGISTRATION_ACTIVATION_EMAIL_TITLE = "Aktywacja w Hotelu pod Roza";
    public static final String RESERVATION_CANCELLING_ACTIVATION_EMAIL_TITLE = "Aktywacja anulowania rezerwacji w Hotelu pod Roza";

    public static String generateRegistrationActivationEmailContent(String login, String link){
        String content =
                "Drogi " + login + ",\n"
                + "Dziękujemy za rejestracje w systemie.\n"
                + "Aby aktywować konto kliknij link poniżej. \n"
                + link + "\n"
                + "Życzymy udanego pobytu w hotelu.\n\n"
                + "---------------\n"
                + "Obsługa hotelu";
        return content;
    };

    public static String generateReservationActivationEmailContent(String link){
        String content =
                "Drogi Użytkowniku,\n"
                        + "Aby aktywować anulowanie rezerwacji kliknij link poniżej. \n"
                        + link + "\n"
                        + "Pozdrawiamy.\n\n"
                        + "---------------\n"
                        + "Obsługa hotelu";
        return content;
    };
}
