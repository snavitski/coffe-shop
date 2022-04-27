export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    productWidget: '#template-product-widget',
    contactWidget: '#template-contact-widget',
  },
  containerOf: {
    pages: '#pages',
    product: '.product-wrapper',
    contact: '.contact-wrapper',
  },
  home: {
    productListHome: '.products-list-home',
  },
  nav: {
    links: '.main-nav a',
  },
  product: {
    productsList: '.products-list',
  },
};

export const settings = {
  db: {
    url:
			'//' +
			window.location.hostname +
			(window.location.hostname == 'localhost' ? ':3131' : ''),
    // url: '//localhost:3131',
    products: 'products',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const templates = {
  productWidget: Handlebars.compile(
    document.querySelector(select.templateOf.productWidget).innerHTML
  ),
  homeWidget: Handlebars.compile(
    document.querySelector(select.templateOf.homeWidget).innerHTML
  ),
};
