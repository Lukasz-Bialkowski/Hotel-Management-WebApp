package tutorial.rest.mvc;

import com.fasterxml.jackson.annotation.JsonView;
import com.hrtools.crudfs.view.Views;
import oracle.jrockit.jfr.events.RequestableEventEnvironment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import tutorial.core.crud.CRUDController;
import tutorial.core.crud.CRUDService;
import tutorial.core.models.entities.*;
import tutorial.core.services.AccountsService;
import tutorial.core.services.ReservationsService;
import tutorial.rest.mvc.events.OnRegistrationCompleteEvent;
import tutorial.rest.mvc.events.OnReservationEvent;

import java.util.Calendar;
import java.util.List;

/**
 * Created by luke on 08.01.16.
 */
@Controller
@RequestMapping("/rest/profile/reservations/")
public class ReservationsController extends CRUDController<Reservation> {

    @Autowired
    ReservationsService reservationsService;

    @RequestMapping(value = "listCurrentReservations",method = {RequestMethod.GET})
    @ResponseBody
    public List<Reservation> listCurrentReservations() {
        return this.reservationsService.getCurrentReservations();
    }

    @RequestMapping(value = "listHistoryReservations", method = {RequestMethod.GET})
    @ResponseBody
    public List<Reservation> listHistoryReservations() {
        return this.reservationsService.getHistoryReservations();
    }

    @RequestMapping(method = {RequestMethod.POST}, value = {"{id}/addReservationToUser"})
    @ResponseBody
    public Reservation addReservationToUser(@PathVariable(value = "id") Long id, @RequestBody Reservation item) {

        return reservationsService.addReservationToUser(id, item);
    }

    @Override
    protected CRUDService<Reservation> getService() {
        return reservationsService;
    }

//    @RequestMapping(method = {RequestMethod.DELETE},value = {"/{id}/deleteReservation"})
//    @ResponseBody
//    public void remove(@PathVariable("id") Long id, @RequestParam("resId") Long resId) {
//        this.reservationsService.removeForAccount(id,resId);
//    }

    @Autowired
    ApplicationEventPublisher eventPublisher;

    @Autowired
    private AccountsService accountsService;

    @RequestMapping(method = {RequestMethod.DELETE},value = {"/{id}/deleteReservation"})
    public @ResponseBody
    void calcelReservation(@PathVariable("id") Long id, @RequestParam("resId") Long resId, WebRequest request) {


        Reservation reservation = reservationsService.getReservationById(resId);
        Account account = accountsService.getAccountById(id);

        System.out.println("Odnaleziona rezerwacja"+ reservation);
        System.out.println("Odnalezione konto"+ account);

        try {
            String appUrl = request.getContextPath();
            OnReservationEvent event = new OnReservationEvent(reservation, request.getLocale(), appUrl, account.getEmail(), account.getId());
            eventPublisher.publishEvent(event);
        } catch (Exception me) {
            System.out.println(me);
        }

    }

    @RequestMapping(value = "{id}/cancel/{token}", method = RequestMethod.GET)
    public String confirmRegistration(WebRequest request, @PathVariable("token") String token, @PathVariable("id") Long id) {

        ReservationCancelVerificationToken verificationToken = reservationsService.getVerificationToken(token);

        Reservation reservation = verificationToken.getReservation();

        reservation.setEnabled(true);
        reservation.setStatus(ReservationStatus.ANULOWANA);
        reservationsService.save(reservation);

        System.out.println(reservation);
        return "redirect:/index.html#/profile/reservations";
    }
}
