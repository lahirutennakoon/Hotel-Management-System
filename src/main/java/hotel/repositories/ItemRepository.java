package hotel.repositories;


import hotel.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, String>
{
    //get all items in descending order of food id
    List<Item> findAllByOrderByItemIdDesc();

    @Transactional
    int deleteItemByItemId(int itemId);

    Item findItemByItemId(int itemId);
}
