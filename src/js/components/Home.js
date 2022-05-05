import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class Home {
  constructor(id, data) {
    const thisHome = this;

    thisHome.id = id;
    thisHome.data = data;

    thisHome.render();
  }

  render() {
    const thisHome = this;

    const generateHTML = templates.homeWidget(thisHome.data);
    thisHome.element = utils.createDOMFromHTML(generateHTML);
    const menuContainer = document.querySelector(select.home.productListHome);
    // console.log('homeContainer', menuContainer);
    menuContainer.appendChild(thisHome.element);
  }
  /*initWidget() {
		const thisHome = this;
		// eslint-disable-next-line no-undef
		thisHome.flickity = new Flickity(thisHome.dom.carousel, {
			cellAlign: "left",
			contain: true,
			prevNextButtons: false,
			wrapAround: true,
			autoPlay: 3000,
		});
	}*/
}
export default Home;
