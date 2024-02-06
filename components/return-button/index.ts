class ButtonComponent extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
		<button class="go-back-button"><custom-text variant="large">${this.textContent}</custom-text></button>
		`;

		const style = document.createElement('style');
		style.textContent = `
						* {
							box-sizing: border-box;
						}
						.go-back-button {
							margin-top: 10px;
							font-family: 'Poppins', sans-serif;
              font-size: 18px;
              font-weight: 500;
              cursor: pointer;
              border: none;
							border-radius: 4px;
              padding: 15px 0;
              text-align: center;
              width: 100%;
							border: 2px solid #000;
							background-color:#fff;
						}
						`;
		this.shadow.appendChild(style);
	}
}
customElements.define('return-button', ButtonComponent);
