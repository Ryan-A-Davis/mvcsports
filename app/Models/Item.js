import { generateId } from "../Utils/GenerateId.js"

export default class Item {

  constructor({ id, price, stock, name, imgUrl, description }) {
    this.id = id || generateId()
    this.price = price
    this.stock = stock
    this.name = name
    this.imgUrl = imgUrl
    this.description = description
  }


  get Template() {
    return ` <div class="card" style="width: 18rem;">
          <img src="${this.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <h4>${this.price}:</h4>
            <p class="card-text">${this.description}</p>
            <p class="text-left">${this.stock}</p><span><button class="btn btn-primary" onclick='app.cartController.add("${this.id}")'>Add to Cart</button></span>
          </div>
        </div>`
  }
}

