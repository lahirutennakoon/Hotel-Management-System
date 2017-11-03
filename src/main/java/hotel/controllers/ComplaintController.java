package hotel.controllers;
import hotel.models.Complaint;
import hotel.repositories.complaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ComplaintController {
    @Autowired
    complaintRepository complaintRepository;

    @RequestMapping(value = "/addComplaint", method = RequestMethod.POST)
    public String addEvent(@RequestBody Complaint complaint )
    {
        complaintRepository.save(complaint);
        return "Complaint Added";
    }
}
