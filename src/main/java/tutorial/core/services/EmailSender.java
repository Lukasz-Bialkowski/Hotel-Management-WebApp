package tutorial.core.services;

/**
 * Created by luke on 10.01.16.
 */
public interface EmailSender {

    public void sendEmail(String recipientEmail, String subject, String content);

    public void sendActivationEmail(String recipientEmail, String subject, String content);

}
