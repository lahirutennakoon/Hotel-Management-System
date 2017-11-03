package hotel.repositories;

import hotel.models.dailyExpenses;
import hotel.models.dailyIncome;
import org.springframework.data.jpa.repository.JpaRepository;

public interface incomeRep extends JpaRepository<dailyIncome, Long> {

	
}