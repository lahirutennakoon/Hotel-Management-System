package hotel.repositories;

import hotel.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface eventRepository extends JpaRepository<Event, Long>  {


}
