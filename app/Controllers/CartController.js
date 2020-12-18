import { ProxyState } from "../AppState.js"
import { cartService } from "../Services/CartServices.js"



export default class CartController {
  constructor() {
    console.log("cart controller")
  }

  add(id) {
    cartService.add(id)
  }
}