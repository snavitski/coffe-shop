import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
  }

  renderInMenu() {
    const thisProduct = this;

    const generateHTML = templates.productWidget(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generateHTML);
    const menuContainer = document.querySelector(select.product.productsList);
    // console.log('menuContainer', menuContainer);
    menuContainer.appendChild(thisProduct.element);
  }
}

export default Product;
