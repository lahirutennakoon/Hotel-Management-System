package hotel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hotel.models.LeaveRequest;
import hotel.repositories.LeaveRequestRepository;

@RestController
public class LeaveRequestControllerApi
{
	@Autowired
	LeaveRequestRepository leaveRequestRepository;
	
	@RequestMapping(value = "/createLeaveRequest", method = RequestMethod.POST)
    public String createLeaveRequest(@RequestBody LeaveRequest leaveRequest) 
	{
		leaveRequestRepository.save(leaveRequest);
        return "Leaverequest created successfully";
    }
}
