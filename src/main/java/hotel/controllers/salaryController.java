package hotel.controllers;



import hotel.models.Salary;
import hotel.repositories.salaryRep;
import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiPathParam;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/salary")
@Api(
		name = "Hotel API",
		description = "Provides a list of methods that manage hotel operations",
		stage = ApiStage.RC)
public class salaryController {


	private salaryRep repository;

	@Autowired
	public salaryController(salaryRep repository){
		this.repository = repository;
	}


	@RequestMapping(value = "/all",  method = RequestMethod.GET)
	public List<Salary> getAll() {

		return repository.findAll();
	}

//	@RequestMapping(value = "/getOne/{id}",  method = RequestMethod.GET)
//	public List<Salary> getOne(@ApiPathParam(name = "id") @PathVariable long id) {
//
//		System.out.println("get one" + id);
//
//		return repository.findById(id);
//	}

	@RequestMapping(value="/save",  method = RequestMethod.POST)
	public List<Salary> save(@RequestBody Salary salary) {

		System.out.println("Save data set" + salary);
		repository.save(salary);

		return repository.findAll();
	}

	@RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
	public List<Salary> update(@ApiPathParam(name = "id") @PathVariable long id , @RequestBody Salary salary) {

		Salary update = repository.findOne(id);
        update.setEmpID(salary.getEmpID());
        update.setEmpName(salary.getEmpName());
        update.setEmpDep(salary.getEmpDep());
		update.setEmpHrs(salary.getEmpHrs());
		update.setEmpOT(salary.getEmpOT());
		update.setEmpHrlyRate(salary.getEmpHrlyRate());
		update.setEmpTax(salary.getEmpTax());
		update.setPayDate(salary.getPayDate());
		update.setGrossPay(salary.getGrossPay());
		update.setNetPay(salary.getNetPay());

		repository.save(update);

		return repository.findAll();
	}


	@RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
	  public List<Salary> remove(@ApiPathParam(name = "id") @PathVariable long id) {
		  
		  System.out.println("id = " + id);

		  repository.delete(id);

		return repository.findAll();
	  }
	

}
