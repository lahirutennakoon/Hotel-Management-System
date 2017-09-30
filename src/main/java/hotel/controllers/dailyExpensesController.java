package hotel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiPathParam;
import org.jsondoc.core.pojo.ApiStage;

import hotel.models.dailyExpenses;
import hotel.repositories.dailyExpensesRep;

import java.util.List;

@RestController
@RequestMapping(value = "/expense")
@Api(
		name = "Hotel API",
		description = "Provides a list of methods that manage hotel operations",
		stage = ApiStage.RC)
public class dailyExpensesController {


	private dailyExpensesRep repository;

	@Autowired
	public dailyExpensesController(dailyExpensesRep repository){
		this.repository = repository;
	}


	@RequestMapping(value = "/all",  method = RequestMethod.GET)
	public List<dailyExpenses> getAll() {

		return repository.findAll();
	}

//	@RequestMapping(value = "/getOne/{id}",  method = RequestMethod.GET)
//	public List<dailyExpenses> getOne(@ApiPathParam(name = "id") @PathVariable long id) {
//
//		System.out.println("get one" + id);
//
//		return repository.findById(id);
//	}

	@RequestMapping(value="/save",  method = RequestMethod.POST)
	public List<dailyExpenses> save(@RequestBody dailyExpenses expense) {

		System.out.println("Save data set" + expense);
		repository.save(expense);

		return repository.findAll();
	}

	@RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
	public List<dailyExpenses> update(@ApiPathParam(name = "id") @PathVariable long id , @RequestBody dailyExpenses expense) {

		dailyExpenses update = repository.findOne(id);
		update.setAmount(expense.getAmount());
		update.setExpensesType(expense.getExpensesType());
		update.setDescription(expense.getDescription());

		repository.save(update);

		return repository.findAll();
	}


	@RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
	public List<dailyExpenses> remove(@ApiPathParam(name = "id") @PathVariable long id) {

		System.out.println("id = " + id);

		repository.delete(id);

		return repository.findAll();
	}


}