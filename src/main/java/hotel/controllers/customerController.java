package hotel.controllers;

import hotel.models.Customer;
import hotel.models.Customer;
import hotel.repositories.customerRepository;
import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiPathParam;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/customer")
@Api(
		name = "Hotel API",
		description = "Provides a list of methods that manage hotel operations",
		stage = ApiStage.RC)
public class customerController {


	private customerRepository repository;

	@Autowired
	public customerController(customerRepository repository){
		this.repository = repository;
	}


	@RequestMapping(value = "/all",  method = RequestMethod.GET)
	public List<Customer> getAll() {

		return repository.findAll();
	}

//	@RequestMapping(value = "/getOne/{id}",  method = RequestMethod.GET)
//	public List<Customer> getOne(@ApiPathParam(name = "id") @PathVariable long id) {
//
//		System.out.println("get one" + id);
//
//		return repository.findById(id);
//	}

	@RequestMapping(value="/save",  method = RequestMethod.POST)
	public List<Customer> save(@RequestBody Customer customer) {

		System.out.println("Save data set" + customer);
		repository.save(customer);

		return repository.findAll();
	}

	@RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
	public List<Customer> update(@ApiPathParam(name = "id") @PathVariable long id , @RequestBody Customer customer) {

		Customer update = repository.findOne(id);
		update.setFullName(customer.getFullName());
		update.setNic(customer.getNic());
		update.setMobileNumber(customer.getMobileNumber());
		update.setEmail(customer.getEmail());
		update.setGender(customer.getGender());

		repository.save(update);

		return repository.findAll();
	}


	@RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
	public List<Customer> remove(@ApiPathParam(name = "id") @PathVariable long id) {

		System.out.println("id = " + id);

		repository.delete(id);

		return repository.findAll();
	}


}