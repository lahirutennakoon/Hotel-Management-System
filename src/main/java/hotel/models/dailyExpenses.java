package hotel.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dailyExpenses")
public class dailyExpenses implements Serializable {

	private static final long serialVersionUID = -3009157732242241606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "expenseDate")
	private String expenseDate;

	@Column(name = "description")
	private String description;

	@Column(name = "expensesType")
	private String expensesType;

	@Column(name = "paymentForm")
	private String paymentForm;

	@Column(name = "amount")
	private String amount;


	public String getAmount() {
		return amount;
	}


	public void setAmount(String amount) {
		this.amount = amount;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}

	public String getExpenseDate() {
		return expenseDate;
	}

	public void setExpenseDate(String expenseDate) {
		this.expenseDate = expenseDate;
	}

	public String getPaymentForm() {
		return paymentForm;
	}

	public void setPaymentForm(String paymentForm) {
		this.paymentForm = paymentForm;
	}


	public String getExpensesType() {
		return expensesType;
	}


	public void setExpensesType(String expensesType) {
		this.expensesType = expensesType;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}

	public dailyExpenses(){

	}

	public dailyExpenses(String expenseDate,String  description, String expensesType ,String paymentForm, String amount) {
		this.expenseDate = expenseDate;
		this.description = description;
		this.expensesType = expensesType;
		this.paymentForm = paymentForm;
		this.amount = amount;
	}

}