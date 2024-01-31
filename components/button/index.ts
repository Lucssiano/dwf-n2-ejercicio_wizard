class ButtonComponent extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
		<button><custom-text variant="large">${this.textContent}</custom-text></button>
		`;

		const button = this.shadowRoot?.querySelector('button');
		const buttonContent = button?.textContent;

		if (button) {
			buttonContent == 'Volver' ? (button.className = 'go-back-button') : (button.className = 'submit-button');
		}

		const style = document.createElement('style');
		style.textContent = `
						* {
							box-sizing: border-box;
						}
						.submit-button, .go-back-button {
							cursor: pointer;
              border: none;
							border-radius: 4px;
              padding: 15px 0;		
              text-align: center;		
              width: 100%;
						}
						.submit-button {
              background-color:#9CBBE9;			
							margin-top: 20px;
							font-family: 'Poppins', sans-serif;	
							font-size: 18px;
							font-weight: 500;
						}
						.go-back-button {
							border: 2px solid #000;
							background-color:#fff;			
						}
						`;
		this.shadow.appendChild(style);
	}
}
customElements.define('custom-button', ButtonComponent);
