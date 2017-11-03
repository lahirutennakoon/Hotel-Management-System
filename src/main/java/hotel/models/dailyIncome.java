package hotel.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "dailyIncome")
public class dailyIncome implements Serializable {

	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "refNo")
	private String refNo;

	@Column(name = "incomeDate")
	private String incomeDate;

	@Column(name = "descc")
	private String descc;

	@Column(name = "incomeType")
	private String incomeType;

	@Column(name = "ipaymentForm")
	private String ipaymentForm;

	@Column(name = "iamount")
	private String iamount;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRefNo() {
		return refNo;
	}

	public void setRefNo(String refNo) {
		this.refNo = refNo;
	}

	public String getIncomeDate() {
		return incomeDate;
	}

	public void setIncomeDate(String incomeDate) {
		this.incomeDate = incomeDate;
	}

	public String getDescc() {
		return descc;
	}

	public void setDescc(String descc) {
		this.descc = descc;
	}

	public String getIncomeType() {
		return incomeType;
	}

	public void setIncomeType(String incomeType) {
		this.incomeType = incomeType;
	}

	public String getIpaymentForm() {
		return ipaymentForm;
	}

	public void setIpaymentForm(String ipaymentForm) {
		this.ipaymentForm = ipaymentForm;
	}

	public String getIamount() {
		return iamount;
	}

	public void setIamount(String iamount) {
		this.iamount = iamount;
	}

	public dailyIncome(){

	}

	public dailyIncome(String refNo, String  incomeDate, String descc , String incomeType, String ipaymentForm,  String iamount) {
		this.refNo = refNo;
		this.incomeDate = incomeDate;
		this.descc = descc;
		this.incomeType = incomeType;
		this.ipaymentForm = ipaymentForm;
		this.iamount = iamount;
	}

}