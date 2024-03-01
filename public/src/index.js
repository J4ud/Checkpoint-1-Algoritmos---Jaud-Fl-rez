import * as productCard from './components/index.js';
import { productsData } from './data/data.js';
// <index></index>
class bershkaContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		productsData.forEach((element) => {
			const card = this.ownerDocument.createElement('mi-producto');
			card.className = 'myProductcard';
			card.setAttribute('title', element.title);
			card.setAttribute('description', element.description);
			card.setAttribute('value', element.value);
			card.setAttribute('inStock', element.inStock);

			this.cards.push(card);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./index.css">
    `;

		this.cards.forEach((mycard) => {
			this.shadowRoot.appendChild(mycard);
		});
	}
}

customElements.define('my-bershkacontainer', bershkaContainer);
