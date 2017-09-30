package hotel.repositories;

import hotel.models.Salary;
import org.springframework.data.jpa.repository.JpaRepository;


public interface salaryRep extends JpaRepository<Salary, Long> {


}