package hotel.controllers;

import hotel.models.Item;
import hotel.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemControllerApi
{
    @Autowired
    ItemRepository itemRepository;

    @RequestMapping(value = "/addItem", method = RequestMethod.POST)
    public String addMenu(@RequestBody Item item)
    {
        itemRepository.save(item);
        return "Item added to inventory";
    }

    @RequestMapping(value = "/getItems", method = RequestMethod.GET)
    public List<Item> getItems()
    {
        return itemRepository.findAllByOrderByItemIdDesc();
    }

    //delete
    @RequestMapping(value = "deleteItem" , method = RequestMethod.DELETE)
    boolean deleteItem(@RequestParam(value="itemId") int itemId)
    {
        itemRepository.deleteItemByItemId(itemId);
        return true;
    }

    @RequestMapping(value = "/editItem", method = RequestMethod.PUT)
    public String editItem(@RequestParam(value="itemId") int itemId, @RequestBody Item item)
    {
        Item itemToEdit=itemRepository.findItemByItemId(itemId);

        itemToEdit.setItemName(item.getItemName());
        itemToEdit.setQuantity(item.getQuantity());
        itemToEdit.setUnitCost(item.getUnitCost());
        itemToEdit.setTotalCost(item.getTotalCost());

        itemRepository.save(itemToEdit);
        return "item edited";
    }
}
