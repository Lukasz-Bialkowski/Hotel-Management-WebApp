package tutorial.rest.mvc;

import com.fasterxml.jackson.annotation.JsonView;
import com.hrtools.crudfs.view.Views;
import oracle.jrockit.jfr.events.RequestableEventEnvironment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tutorial.core.crud.CRUDController;
import tutorial.core.crud.CRUDService;
import tutorial.core.models.entities.Reservation;
import tutorial.core.services.ReservationsService;

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
    public Reservation kupa(@PathVariable(value = "id") Long id, @RequestBody Reservation item) {

        return reservationsService.addReservationToUser(id, item);
    }

    @Override
    protected CRUDService<Reservation> getService() {
        return reservationsService;
    }
}
