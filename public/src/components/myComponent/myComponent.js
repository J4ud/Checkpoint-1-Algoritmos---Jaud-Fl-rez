// <myComponent></myComponent>
import { productsData } from '../../data/data.js';

class Producto extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observerAttributes() {
		return ['title', 'description', 'value', 'inStock'];
	}

	connectedCallback() {
		this.render;
	}

	render() {
		this.shadowRoot.innerHTML = `
		<link rel="stylesheet" href="./myComponent.css">
    <figure>
			<h1>${title}</h1>
			<h2>${description}</h2>
			<h2>${value}</h2>
			<h2>${inStock}</h2>
    </figure>
    `;
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render;
	}
}

customElements.define('mi-producto', Producto);
export default Producto;
