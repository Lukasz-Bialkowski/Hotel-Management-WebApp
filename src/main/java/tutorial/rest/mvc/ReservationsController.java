package tutorial.rest.mvc;

import com.fasterxml.jackson.annotation.JsonView;
import com.hrtools.crudfs.view.Views;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
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

    @Override
    protected CRUDService<Reservation> getService() {
        return reservationsService;
    }
}
