package hotel.controllers;

import hotel.models.Item;
import hotel.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
}
