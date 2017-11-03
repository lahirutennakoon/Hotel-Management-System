package hotel.repositories;
import hotel.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface reservationRepository extends JpaRepository<Reservation, Long>  {


}
