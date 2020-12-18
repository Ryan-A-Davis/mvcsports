import CartController from "./Controllers/CartController.js";
import ItemsController from "./Controllers/ItemsController.js";


class App {
  itemsController = new ItemsController()
  cartController = new CartController()
}

window["app"] = new App();
