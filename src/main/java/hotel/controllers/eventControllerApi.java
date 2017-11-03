package hotel.controllers;

import hotel.models.Event;
import hotel.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//IT15021076
@RestController
public class eventControllerApi
{
    @Autowired
    EventRepository eventRepository;

    @RequestMapping(value = "/getEvents", method = RequestMethod.GET)
    public List<Event> getEvents()
    {
        return eventRepository.findAllByOrderByEventidDesc();
    }

    //getApprovalEvents
    @RequestMapping(value = "/getApprovalEvents", method = RequestMethod.GET)
   public List<Event> getApprovalEvents()
    {
     // return eventRepository.findAllByOrderByEventidDesc(); //work
       return eventRepository.findAllForEventPending("Pending");
    }
    //approve event
    @RequestMapping(value = "/approveEvent", method = RequestMethod.PUT)
    public String approveEvent(@RequestParam(value="eventid") int eventid, @RequestBody Event event)
    {
        Event eventToApprove=eventRepository.findEventByEventid(eventid);

        eventToApprove.setApproval_state("Approved");

        eventRepository.save(eventToApprove);
        return "event successfully approved";
    }
    //reject event
    @RequestMapping(value = "/rejectEvent", method = RequestMethod.PUT)
    public String rejectEvent(@RequestParam(value="eventid") int eventid, @RequestBody Event event)
    {
        Event eventToReject=eventRepository.findEventByEventid(eventid);

        eventToReject.setApproval_state("Rejected");

        eventRepository.save(eventToReject);
        return "event successfully approved";
    }


    @RequestMapping(value = "/addEvent", method = RequestMethod.POST)
    public String addEvent(@RequestBody Event event)
    {
        eventRepository.save(event);
        return "added event";
    }

    @RequestMapping(value = "/editEvent", method = RequestMethod.PUT)
    public String editEvent(@RequestParam(value="eventid") int eventid, @RequestBody Event event)
    {
        Event eventToEdit=eventRepository.findEventByEventid(eventid);

        eventToEdit.setAdded_date(event.getAdded_date());
        eventToEdit.setApproval_state(event.getApproval_state());
        eventToEdit.setBilled_to(event.getBilled_to());
        eventToEdit.setEvent_date(event.getEvent_date());
        eventToEdit.setEvent_name(event.getEvent_name());
        eventToEdit.setEvent_state(event.getEvent_state());
        eventToEdit.setTime_from(event.getTime_from());
        eventToEdit.setTime_to(event.getTime_to());
        eventToEdit.setTotal_cost(event.getTotal_cost());

        eventRepository.save(eventToEdit);
        return "event successfully edited";
    }

    @RequestMapping(value = "/deleteEvent", method = RequestMethod.DELETE)
    boolean deleteEvent(@RequestParam(value="eventid") int eventid)
    {
        eventRepository.deleteEventByEventid(eventid);
        return true;
    }

}