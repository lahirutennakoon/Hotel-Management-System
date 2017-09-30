package hotel.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Salary")
public class Salary implements Serializable {

	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "empID")
	private String empID;

	@Column(name = "empName")
	private String empName;

	@Column(name = "empDep")
	private String empDep;

	@Column(name = "empHrs")
	private String empHrs;

	@Column(name = "empOT")
	private String empOT;

	@Column(name = "empHrlyRate")
	private String empHrlyRate;

	@Column(name = "empTax")
	private String empTax;

	@Column(name = "payDate")
	private String payDate;

	@Column(name = "grossPay")
	private String grossPay;

	@Column(name = "netPay")
	private String netPay;


	public Salary() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEmpID() {
		return empID;
	}

	public void setEmpID(String empID) {
		this.empID = empID;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmpDep() {
		return empDep;
	}

	public void setEmpDep(String empDep) {
		this.empDep = empDep;
	}

	public String getEmpHrs() {
		return empHrs;
	}

	public void setEmpHrs(String empHrs) {
		this.empHrs = empHrs;
	}

	public String getEmpOT() {
		return empOT;
	}

	public void setEmpOT(String empOT) {
		this.empOT = empOT;
	}

	public String getEmpHrlyRate() {
		return empHrlyRate;
	}

	public void setEmpHrlyRate(String empHrlyRate) {
		this.empHrlyRate = empHrlyRate;
	}

	public String getEmpTax() {
		return empTax;
	}

	public void setEmpTax(String empTax) {
		this.empTax = empTax;
	}

	public String getPayDate() {
		return payDate;
	}

	public void setPayDate(String payDate) {
		this.payDate = payDate;
	}

	public String getGrossPay() {
		return grossPay;
	}

	public void setGrossPay(String grossPay) {
		this.grossPay = grossPay;
	}

	public String getNetPay() {
		return netPay;
	}

	public void setNetPay(String netPay) {
		this.netPay = netPay;
	}

//	public Salary(String expensesType , String  description, String amount) {
//		this.expensesType = expensesType;
//		this.description = description;
//		this.amount = amount;
//	}

}