import { ProxyState } from "../AppState.js"



class CartService {
  constructor() {
    console.log("this is cart services")
  }

  add(id) {
    let item = ProxyState.items.find(i => i.id == id)
    ProxyState.cart.push(item)
    console.log(ProxyState.cart)
    console.log(ProxyState.items)
  }
}

export const cartService = new CartService