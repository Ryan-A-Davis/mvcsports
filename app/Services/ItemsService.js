import Item from "../Models/Item.js"
import { ProxyState } from "../AppState.js"

class ItemsService {
  createItem(newItem) {
    let item = new Item(newItem)
    ProxyState.items = [...ProxyState.items, item]
  }
  constructor() {
    console.log("item constructor")
  }
}

export const itemsService = new ItemsService