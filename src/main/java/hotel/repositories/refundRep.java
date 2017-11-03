package hotel.repositories;

import hotel.models.Refund;
import hotel.models.dailyExpenses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface refundRep extends JpaRepository<Refund, Long> {

	
}