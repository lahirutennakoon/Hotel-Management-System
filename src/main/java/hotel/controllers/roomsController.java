package hotel.controllers;

import hotel.models.Rooms;
import hotel.repositories.roomsRep;
import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiPathParam;
import org.jsondoc.core.pojo.ApiStage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/rooms")
@Api(
		name = "Hotel API",
		description = "Provides a list of methods that manage hotel operations",
		stage = ApiStage.RC)
public class roomsController {


	private roomsRep repository;

	@Autowired
	public roomsController(roomsRep repository){
		this.repository = repository;
	}


	@RequestMapping(value = "/all",  method = RequestMethod.GET)
	public List<Rooms> getAll() {

		return repository.findAll();
	}

//	@RequestMapping(value = "/getOne/{id}",  method = RequestMethod.GET)
//	public List<Rooms> getOne(@ApiPathParam(name = "id") @PathVariable long id) {
//
//		System.out.println("get one" + id);
//
//		repository.findOne(id);
//
//		return repository.findAll();
//	}

	@RequestMapping(value="/save",  method = RequestMethod.POST)
	public List<Rooms> save(@RequestBody Rooms room) {

		System.out.println("Save data set" + room);
		repository.save(room);

		return repository.findAll();
	}

	@RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
	public List<Rooms> update(@ApiPathParam(name = "id") @PathVariable long id , @RequestBody Rooms room) {

		Rooms update = repository.findOne(id);
		update.setRoomNo(room.getRoomNo());
		update.setRoomType(room.getRoomType());
		update.setRoomStatus(room.getRoomStatus());
		update.setRoomRate(room.getRoomRate());
		update.setNoOfPerson(room.getNoOfPerson());
		update.setAdultRate(room.getAdultRate());
		update.setChildRate(room.getChildRate());
		update.setRemarks(room.getRemarks());
		update.setAssigned(room.getAssigned());

		repository.save(update);

		return repository.findAll();
	}


	@RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
	public List<Rooms> remove(@ApiPathParam(name = "id") @PathVariable long id) {

		System.out.println("id = " + id);

		repository.delete(id);

		return repository.findAll();
	}


}