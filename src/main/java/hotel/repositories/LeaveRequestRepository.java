package hotel.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import hotel.models.LeaveRequest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, String>
{
	public List<LeaveRequest> findAll();

	@Query("SELECT l FROM LeaveRequest l WHERE l.nic=:nic ORDER BY l.leaveRequestNo DESC")
	public List<LeaveRequest> findAllForEmployee(@Param("nic") String nic);

	public LeaveRequest findBynic(String nic);
}
