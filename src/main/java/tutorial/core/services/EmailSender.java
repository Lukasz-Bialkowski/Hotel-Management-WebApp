package tutorial.core.services;

/**
 * Created by luke on 10.01.16.
 */
public interface EmailSender {

    public void sendEmail(String templateName, String email, String login);

}
