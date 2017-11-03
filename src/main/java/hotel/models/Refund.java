package hotel.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Refund")
public class Refund implements Serializable {

	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "guestNo")
	private String guestNo;

	@Column(name = "guestName")
	private String guestName;

	@Column(name = "refundDate")
	private String refundDate;

	@Column(name = "paymentType")
	private String paymentType;

	@Column(name = "refundAmount")
	private String refundAmount;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getGuestNo() {
		return guestNo;
	}

	public void setGuestNo(String guestNo) {
		this.guestNo = guestNo;
	}

	public String getGuestName() {
		return guestName;
	}

	public void setGuestName(String guestName) {
		this.guestName = guestName;
	}

	public String getRefundDate() {
		return refundDate;
	}

	public void setRefundDate(String refundDate) {
		this.refundDate = refundDate;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public String getRefundAmount() {
		return refundAmount;
	}

	public void setRefundAmount(String refundAmount) {
		this.refundAmount = refundAmount;
	}

	public Refund(){

	}

	public Refund(String guestNo, String  guestName, String refundDate , String paymentType, String refundAmount) {
		this.guestNo = guestNo;
		this.guestName = guestName;
		this.refundDate = refundDate;
		this.paymentType = paymentType;
		this.refundAmount = refundAmount;
	}

}