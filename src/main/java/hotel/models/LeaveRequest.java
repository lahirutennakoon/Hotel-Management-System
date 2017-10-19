package hotel.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "leaverequest")
public class LeaveRequest implements Serializable
{
	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="leave_request_no")
	private int leaveRequestNo;
	
	@Column(name = "reason")
	private String reason;
	
	@Column(name = "no_of_days")
	private double noOfDays;
	
	@Column(name = "nic")
	private String nic;

	@Column(name = "starting_date")
	private String startingDate;
	
	@Column(name = "status")
	private String status;
	
	public int getLeaveRequestNo()
	{
		return leaveRequestNo;
	}

	public void setLeaveRequestNo(int leaveRequestNo)
	{
		this.leaveRequestNo = leaveRequestNo;
	}

	public String getReason()
	{
		return reason;
	}

	public void setReason(String reason)
	{
		this.reason = reason;
	}

	public double getNoOfDays()
	{
		return noOfDays;
	}

	public void setNoOfDays(double noOfDays)
	{
		this.noOfDays = noOfDays;
	}

	public String getNic()
	{
		return nic;
	}

	public void setNic(String nic)
	{
		this.nic = nic;
	}

	public String getStartingDate()
	{
		return startingDate;
	}

	public void setStartingDate(String startingDate)
	{
		this.startingDate = startingDate;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}
	
	
}
