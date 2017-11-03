package hotel.controllers;

import hotel.models.Room;
import hotel.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//IT15021076
@RestController
public class roomControllerApi
{
    @Autowired
    RoomRepository roomRepository;

    @RequestMapping(value = "/getRooms", method = RequestMethod.GET)
    public List<Room> getRooms()
    {
        return roomRepository.findAll();
    }

    //getAvailableRooms
    @RequestMapping(value = "/getAvailableRooms", method = RequestMethod.GET)
   public List<Room> getAvailableRooms()
    {
     // return eventRepository.findAllByOrderByEventidDesc(); //work
       return roomRepository.findAllAvailableRooms("Available");
    }

    //getvacantRooms
    @RequestMapping(value = "/getVacantRooms", method = RequestMethod.GET)
    public List<Room> getVacantRooms()
    {
        return roomRepository.findAllAvailableRooms("Vacant");
    }



    //book room
    @RequestMapping(value = "/bookRoom", method = RequestMethod.PUT)
    public String bookRoom(@RequestParam(value="roomid") int roomid, @RequestBody Room room)
    {
        Room roomToBook=roomRepository.findRoomByRoomid(roomid);

        roomToBook.setAvailability("Vacant");

        roomRepository.save(roomToBook);
        return "room booked!";
    }

    //free room
    @RequestMapping(value = "/freeRoom", method = RequestMethod.PUT)
    public String freeRoom(@RequestParam(value="roomid") int roomid, @RequestBody Room room)
    {
        Room roomToFree=roomRepository.findRoomByRoomid(roomid);

        roomToFree.setAvailability("Available");

        roomRepository.save(roomToFree);
        return "room freed!";
    }



    @RequestMapping(value = "/addRoom", method = RequestMethod.POST)
    public String addEvent(@RequestBody Room room)
    {
        roomRepository.save(room);
        return "added event";
    }

    @RequestMapping(value = "/editRoom", method = RequestMethod.PUT)
    public String editRoom(@RequestParam(value="roomid") int roomid, @RequestBody Room room)
    {
        Room roomToEdit=roomRepository.findRoomByRoomid(roomid);

        roomToEdit.setAvailability(room.getAvailability());
        roomToEdit.setCapacity(room.getCapacity());
        roomToEdit.setCost_per_day(room.getCost_per_day());
        roomToEdit.setRoom_desk(room.getRoom_desk());
        roomToEdit.setRoom_type(room.getRoom_type());

        roomRepository.save(roomToEdit);
        return "room successfully edited";
    }

    @RequestMapping(value = "/deleteRoom", method = RequestMethod.DELETE)
    boolean deleteRoom(@RequestParam(value="roomid") int roomid)
    {
        roomRepository.deleteRoomByRoomid(roomid);
        return true;
    }

}