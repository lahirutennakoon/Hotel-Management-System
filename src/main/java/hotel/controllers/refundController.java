package hotel.controllers;

import hotel.models.Refund;
import hotel.repositories.refundRep;
import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiPathParam;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/refund")
@Api(
		name = "Hotel API",
		description = "Provides a list of methods that manage hotel operations",
		stage = ApiStage.RC)
public class refundController {


	private refundRep repository;

	@Autowired
	public refundController(refundRep repository){
		this.repository = repository;
	}


	@RequestMapping(value = "/all",  method = RequestMethod.GET)
	public List<Refund> getAll() {

		return repository.findAll();
	}

//	@RequestMapping(value = "/getOne/{id}",  method = RequestMethod.GET)
//	public List<Refund> getOne(@ApiPathParam(name = "id") @PathVariable long id) {
//
//		System.out.println("get one" + id);
//
//		return repository.findById(id);
//	}

	@RequestMapping(value="/save",  method = RequestMethod.POST)
	public List<Refund> save(@RequestBody Refund refund) {

		System.out.println("Save data set" + refund);
		repository.save(refund);

		return repository.findAll();
	}

	@RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
	public List<Refund> update(@ApiPathParam(name = "id") @PathVariable long id , @RequestBody Refund refund) {

		Refund update = repository.findOne(id);
		update.setGuestNo(refund.getGuestNo());
		update.setGuestName(refund.getGuestName());
		update.setRefundDate(refund.getRefundDate());
		update.setPaymentType(refund.getPaymentType());
		update.setRefundAmount(refund.getRefundAmount());



		repository.save(update);

		return repository.findAll();
	}


	@RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
	public List<Refund> remove(@ApiPathParam(name = "id") @PathVariable long id) {

		System.out.println("id = " + id);

		repository.delete(id);

		return repository.findAll();
	}


}