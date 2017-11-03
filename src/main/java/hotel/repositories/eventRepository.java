package hotel.repositories;

import hotel.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, String>
{
    List<Event> findAll();
    List<Event> findAllByOrderByEventidDesc();

///   @Query("SELECT l FROM Event l WHERE l.approval_state=:state ORDER BY l.eventid DESC")

    @Query("SELECT e FROM Event e where e.approval_state=:state")
    public List<Event> findAllForEventPending(@Param("state") String state);

    @Transactional
    int deleteEventByEventid(int eventid);

    Event findEventByEventid(int eventid);

}
