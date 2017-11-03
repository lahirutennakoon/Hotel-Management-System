package hotel.repositories;
import hotel.models.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface complaintRepository extends JpaRepository<Complaint, Long>  {

}
