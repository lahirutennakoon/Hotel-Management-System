package hotel.controllers;
import hotel.models.Reservation;
import hotel.repositories.reservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReservationController
{
    @Autowired
    reservationRepository reservationRepository;

    @RequestMapping(value = "/addReservation", method = RequestMethod.POST)
    public String addEvent(@RequestBody Reservation reservation )
    {
        reservationRepository.save(reservation);
        return "Reservation Added";
    }

}
