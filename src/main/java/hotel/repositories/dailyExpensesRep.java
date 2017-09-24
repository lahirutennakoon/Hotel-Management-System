package hotel.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import hotel.models.dailyExpenses;

public interface dailyExpensesRep extends JpaRepository<dailyExpenses, Long> {

	
}