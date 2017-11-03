package hotel.controllers;

import hotel.models.dailyIncome;
import hotel.repositories.incomeRep;
import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiPathParam;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/income")
@Api(
		name = "Hotel API",
		description = "Provides a list of methods that manage hotel operations",
		stage = ApiStage.RC)
public class dailyIncomeController {


	private incomeRep repository;

	@Autowired
	public dailyIncomeController(incomeRep repository){
		this.repository = repository;
	}


	@RequestMapping(value = "/all",  method = RequestMethod.GET)
	public List<dailyIncome> getAll() {

		return repository.findAll();
	}

//	@RequestMapping(value = "/getOne/{id}",  method = RequestMethod.GET)
//	public List<dailyIncome> getOne(@ApiPathParam(name = "id") @PathVariable long id) {
//
//		System.out.println("get one" + id);
//
//		return repository.findById(id);
//	}

	@RequestMapping(value="/save",  method = RequestMethod.POST)
	public List<dailyIncome> save(@RequestBody dailyIncome income) {

		System.out.println("Save data set" + income);
		repository.save(income);

		return repository.findAll();
	}

	@RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
	public List<dailyIncome> update(@ApiPathParam(name = "id") @PathVariable long id , @RequestBody dailyIncome income) {

		dailyIncome update = repository.findOne(id);
		update.setRefNo(income.getRefNo());
		update.setIncomeDate(income.getIncomeDate());
		update.setDescc(income.getDescc());
		update.setIncomeType(income.getIncomeType());
		update.setIpaymentForm(income.getIpaymentForm());
		update.setIamount(income.getIamount());



		repository.save(update);

		return repository.findAll();
	}


	@RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
	public List<dailyIncome> remove(@ApiPathParam(name = "id") @PathVariable long id) {

		System.out.println("id = " + id);

		repository.delete(id);

		return repository.findAll();
	}


}