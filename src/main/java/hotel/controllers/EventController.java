package hotel.controllers;
import hotel.models.Event;
import hotel.repositories.eventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventController
{
    @Autowired
    eventRepository eventRepository;

    @RequestMapping(value = "/addEvent", method = RequestMethod.POST)
    public String addEvent(@RequestBody Event event )
    {
        eventRepository.save(event);
        return "Event Added";
    }
}
