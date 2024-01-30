import { state } from '../../src/state';

class FieldsetComponent extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
		this.render();
	}

	render() {
		const label = this.getAttribute('label') || 'Label';
		const inputId = this.getAttribute('inputId') || 'inputId';
		const inputType = this.getAttribute('inputType') || 'text';
		const inputPlaceholder = this.getAttribute('inputPlaceholder') || '.';
		// console.log(inputPlaceholder); // no se pone el placeholder completo (?), pero si se imprime completo

		this.shadow.innerHTML = `
				<form class="welcome-form">
					<label for=${inputId}>
						<custom-text>${label}</custom-text>
					</label>
					<input class="input" id=${inputId} type=${inputType} placeholder=${inputPlaceholder} name="text" required>
	  			<button class="submit-button">Comenzar</button>
				</form>
					`;

		const formEl = this.shadow.querySelector('.welcome-form');
		formEl?.addEventListener('submit', (e: Event) => {
			e.preventDefault();
			const form = e.target as HTMLFormElement;
			const inputTextValue = form.text.value;
			state.setState({
				...state.getState(),
				nombre: inputTextValue,
			});
			// params?.goTo('/form');
		});

		const style = document.createElement('style');
		style.textContent = `
						* {
							box-sizing: border-box;
						}
						.input {
							font-family: 'Poppins', sans-serif;
							font-size: 18px;
							border-radius: 4px;
							border: 2px solid #000;
							padding: 17px 13px;
							width: 100%;
						}
						.input::placeholder{
							color: #ccc;
						}
						.submit-button {
							cursor: pointer;
              border: none;
							border-radius: 4px;
              padding: 15px 0;		
              text-align: center;		
              width: 100%;
							margin-top: 20px;
              background-color:#9CBBE9;		
							font-family: 'Poppins', sans-serif;	
							font-size: 18px;
							font-weight: 500;
						}
						`;
		this.shadow.appendChild(style);
	}
}
customElements.define('custom-fieldset', FieldsetComponent);
