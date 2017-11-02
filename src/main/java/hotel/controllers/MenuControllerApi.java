package hotel.controllers;

import hotel.models.Menu;
import hotel.repositories.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MenuControllerApi
{
    @Autowired
    MenuRepository menuRepository;

    @RequestMapping(value = "/createMenu", method = RequestMethod.POST)
    public String createMenu(@RequestBody Menu menu)
    {
        menuRepository.save(menu);
        return "Menu created successfully";
    }

    @RequestMapping(value = "/getMenus", method = RequestMethod.GET)
    public List<Menu> getMenus()
    {
        return menuRepository.findAllByOrderByFoodIdDesc();
    }

    @RequestMapping(value = "/deleteMenu", method = RequestMethod.DELETE)
    boolean deleteMenu(@RequestParam(value="foodId") int foodId)
    {
        menuRepository.deleteMenuByFoodId(foodId);
        return true;
    }

    @RequestMapping(value = "/editMenu", method = RequestMethod.PUT)
    public String editMenu(@RequestParam(value="foodId") int foodId, @RequestBody Menu menu)
    {
        Menu menuToEdit=menuRepository.findMenuByFoodId(foodId);

        menuToEdit.setFoodName(menu.getFoodName());
        menuToEdit.setFoodType(menu.getFoodType());
        menuToEdit.setMealType(menu.getMealType());
        menuToEdit.setDate(menu.getDate());

        menuRepository.save(menuToEdit);
        return "Menu successfully edited";
    }


}
