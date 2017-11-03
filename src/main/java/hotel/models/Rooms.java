package hotel.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "rooms")
public class Rooms implements Serializable {

	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "roomNo")
	private String roomNo;

	@Column(name = "roomType")
	private String roomType;

	@Column(name = "roomStatus")
	private String roomStatus;

	@Column(name = "roomRate")
	private String roomRate;

	@Column(name = "noOfPerson")
	private String noOfPerson;

	@Column(name = "adultRate")
	private String adultRate;

	@Column(name = "childRate")
	private String childRate;

	@Column(name = "remarks")
	private String remarks;

	@Column(name = "assigned")
	private String assigned;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRoomNo() {
		return roomNo;
	}

	public void setRoomNo(String roomNo) {
		this.roomNo = roomNo;
	}

	public String getRoomType() {
		return roomType;
	}

	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}

	public String getRoomStatus() {
		return roomStatus;
	}

	public void setRoomStatus(String roomStatus) {
		this.roomStatus = roomStatus;
	}

	public String getRoomRate() {
		return roomRate;
	}

	public void setRoomRate(String roomRate) {
		this.roomRate = roomRate;
	}

	public String getNoOfPerson() {
		return noOfPerson;
	}

	public void setNoOfPerson(String noOfPerson) {
		this.noOfPerson = noOfPerson;
	}

	public String getAdultRate() {
		return adultRate;
	}

	public void setAdultRate(String adultRate) {
		this.adultRate = adultRate;
	}

	public String getChildRate() {
		return childRate;
	}

	public void setChildRate(String childRate) {
		this.childRate = childRate;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getAssigned() {
		return assigned;
	}

	public void setAssigned(String assigned) {
		this.assigned = assigned;
	}

	public Rooms() {
	}


	public Rooms(long id, String roomNo , String  roomType, String roomStatus, String roomRate, String noOfPerson, String adultRate, String childRate,String remarks,String assigned) {
		this.id = id;
		this.roomNo = roomNo;
		this.roomType = roomType;
		this.roomStatus = roomStatus;
		this.roomRate = roomRate;
		this.noOfPerson = noOfPerson;
		this.adultRate = adultRate;
		this.childRate = childRate;
		this.remarks = remarks;
		this.assigned = assigned;
	}

}