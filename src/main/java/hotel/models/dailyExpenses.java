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

	@Column(name = "expensesType")
	private String expensesType;

	@Column(name = "description")
	private String description;
	
	@Column(name = "amount")
	private String amount;


	public String getAmount() {
		return amount;
	}


	public void setAmount(String amount) {
		this.amount = amount;
	}


	public dailyExpenses() {
	}

	
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
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



	public dailyExpenses(String expensesType ,String  description, String amount) {
		this.expensesType = expensesType;
		this.description = description;
		this.amount = amount;
	}

}