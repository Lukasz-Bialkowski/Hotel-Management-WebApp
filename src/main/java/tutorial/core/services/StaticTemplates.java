package tutorial.core.services;

/**
 * Created by luke on 10.01.16.
 */
public class StaticTemplates {

    public static final String ACTIVATION_EMAIL_TITLE = "Aktywacja w Hotelu pod Roza";

    public static String generateEmailContent(String login){
        String content =
                "Drogi " + login + ",\n"
                + "Dziękujemy za rejestracje w systemie.\n"
                + "Aby aktywować konto kliknij link poniżej. \n"
                + "Życzymy udanego pobytu w hotelu.\n\n"
                + "---------------\n"
                + "Obsługa hotelu";
        return content;
    };
}
