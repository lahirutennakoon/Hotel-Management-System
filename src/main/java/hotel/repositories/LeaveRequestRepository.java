package hotel.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import hotel.models.LeaveRequest;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Long>
{

}
