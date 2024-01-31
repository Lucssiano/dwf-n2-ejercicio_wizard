import { state } from '../../src/state';

class FieldsetComponent extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });
	// name: string; // Marce lo pone, pero en realidad no todos los fieldset tienen nombre

	constructor() {
		super();
		this.render();
		// this.name = state.getState().name;
		// state.subscribe(() => {
		// 	this.name = state.getState().name;
		//  this.render();
		// });
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
				</form>
					`;
		/* Cómo hago para usar el custom-button? No me lo toma para el form */
		/* Si quiero hacer un form distinto no puedo porque ya tiene esta estructura */

		/* Dependiendo de la page el formulario tiene más o menos datos, entonces no se si tendria que dejarlo acá o en la page */
		const formEl = this.shadow.querySelector('.welcome-form');
		formEl?.addEventListener('submit', (e: Event) => {
			e.preventDefault();
			const form = e.target as HTMLFormElement;
			const inputTextValue = form.text.value;
			state.setState({
				...state.getState(),
				name: inputTextValue,
			});
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
						
						`;
		this.shadow.appendChild(style);
	}
}
customElements.define('custom-fieldset', FieldsetComponent);
