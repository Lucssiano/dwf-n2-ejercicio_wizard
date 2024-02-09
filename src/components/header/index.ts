class Header extends HTMLElement {
	constructor() {
		super();
		this.render();
	}
	render() {
		const shadow = this.attachShadow({ mode: 'open' });

		const header = document.createElement('header');
		header.classList.add('header');
		header.textContent = 'Header';

		const style = document.createElement('style');
		style.textContent = `
					.header {
						font-family : 'Poppins' , sans-serif;
						font-size: 22px;
						font-weight: 500;
						background-color: #FF8282;
						text-align: center;
						padding: 20px 0;
					}
			`;

		shadow.appendChild(style);
		shadow.appendChild(header);
	}
}
customElements.define('custom-header', Header);
