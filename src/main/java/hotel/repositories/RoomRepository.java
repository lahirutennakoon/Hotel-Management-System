package hotel.repositories;

import hotel.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, String>
{

    List<Room> findAll();
    List<Room> findAllByOrderByRoomidDesc();



    @Query("SELECT e FROM Room e where e.availability=:state")
    public List<Room> findAllAvailableRooms(@Param("state") String state);

    @Transactional
    int deleteRoomByRoomid(int roomid);

    Room findRoomByRoomid(int roomid);

}
