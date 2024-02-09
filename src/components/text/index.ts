class TextComponent extends HTMLElement {
	constructor() {
		super();
		this.render();
	}
	render() {
		const variant = this.getAttribute('variant') || 'body';

		const shadow = this.attachShadow({ mode: 'open' });
		const div = document.createElement('div');
		div.textContent = this.textContent;
		div.className = variant;

		const style = document.createElement('style');
		style.textContent = `
						.body {
								font-family: 'Poppins', sans-serif;
								font-size: 18px;
						}
						.title {
								font-family: 'Poppins', sans-serif;
								font-size: 52px;
								font-weight: 700;
						}
						.large {
								font-family: 'Poppins', sans-serif;
								font-size: 22px;
								font-weight: 500;
						}
						`;

		shadow.appendChild(style);
		shadow.appendChild(div);
	}
}
customElements.define('custom-text', TextComponent);
