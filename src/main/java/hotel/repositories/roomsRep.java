package hotel.repositories;

import hotel.models.Rooms;
import org.springframework.data.jpa.repository.JpaRepository;

public interface roomsRep extends JpaRepository<Rooms, Long> {


}