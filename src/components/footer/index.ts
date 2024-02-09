class Footer extends HTMLElement {
	constructor() {
		super();
		this.render();
	}
	render() {
		const shadow = this.attachShadow({ mode: 'open' });

		const footer = document.createElement('footer');
		footer.classList.add('footer');
		footer.textContent = 'Footer';

		const style = document.createElement('style');
		style.textContent = `
					.footer {
						font-family : 'Poppins' , sans-serif;
						font-size: 22px;
						font-weight: 500;
						background-color: #FFA0EA;
						text-align: center;
						padding: 105px 0;
					}
			`;

		shadow.appendChild(style);
		shadow.appendChild(footer);
	}
}
customElements.define('custom-footer', Footer);
