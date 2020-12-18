import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"
import { itemsService } from "../Services/ItemsService.js"

function _drawItems() {
  let template = ""
  let items = ProxyState.items

  items.forEach(i => template += i.Template)

  document.getElementById('items').innerHTML = template
}

function _drawItemButton() {
  document.getElementById('itemButton').innerHTML = `<div class="col text-right">
        <button type="button" class="btn btn-outline-secondary" data-toggle="modal"
          data-target="#new-item-modal">+Item</button>
        <div class="modal fade" id="new-item-modal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">NEW ITEM FORM</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onsubmit="app.itemsController.createItem()">
                  <input type="text" id="itemTitle" placeholder="Item Title" required>
                  <input type="number" id="price" placeholder="Price" required>
                  <input type="number" id="stock" placeholder="On Hand" required min="10" >
                  <input type="text" id="description" placeholder="description">
                  <input type="text" id="imgUrl" placeholder="Image Url">
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Create Item</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cartModal">
  View Cart
</button>

<!-- Modal -->
<div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">The Cart</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id= "theCart">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
}


export default class ItemsController {
  constructor() {
    ProxyState.on("items", _drawItems)
    _drawItems()
    _drawItemButton()
  }

  createItem() {
    window.event.preventDefault()
    let form = window.event.target
    let newItem = {
      name: form['itemTitle'].value,
      price: form['price'].value,
      stock: form['stock'].value,
      description: form['description'].value,
      imgUrl: form['imgUrl'].value
    }
    itemsService.createItem(newItem)
    console.log(ProxyState.items)

    form.reset()
    document.getElementById("new-item-modal")//.//modal('hide')
  }
}