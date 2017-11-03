package hotel.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	/*@RequestMapping(value = "/getLeaveRequest", method = RequestMethod.GET)
	public List<LeaveRequest> getLeaveRequest()
	{
		return leaveRequestRepository.findAll();
	}*/

	/*@RequestMapping(value = "/getSingleLeaveRequest", method = RequestMethod.GET)
	public LeaveRequest findBynic(@RequestParam(value="nic") String nic)
	{
		return leaveRequestRepository.findBynic(nic);
	}*/

	//get all the leave requests for a particular employee
	@RequestMapping(value = "/getLeaveRequestForEmployee", method = RequestMethod.GET)
	public List<LeaveRequest> findAllForEmployee(@RequestParam(value="nic") String nic)
	{
		return leaveRequestRepository.findAll();
		//return leaveRequestRepository.findAllForEmployee(nic);
	}

}
