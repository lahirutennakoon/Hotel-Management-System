package hotel.repositories;

import hotel.models.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface MenuRepository extends JpaRepository<Menu, String>
{
    //get all menus in descending order
    List<Menu> findAllByOrderByFoodIdDesc();

    @Transactional
    int deleteMenuByFoodId(int foodId);

    Menu findMenuByFoodId(int foodId);
}
