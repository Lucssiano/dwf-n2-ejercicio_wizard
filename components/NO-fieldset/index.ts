// // import { state } from '../../src/state';

// class FieldsetComponent extends HTMLElement {
// 	shadow = this.attachShadow({ mode: 'open' });

// 	constructor() {
// 		super();
// 		this.render();
// 	}

// 	render() {
// 		const label = this.getAttribute('label') || 'Label';
// 		const inputId = this.getAttribute('inputId') || 'inputId';
// 		const inputType = this.getAttribute('inputType') || 'text';
// 		const inputPlaceholder = this.getAttribute('inputPlaceholder') || '.';

// 		this.shadow.innerHTML = `
// 					<label for=${inputId}>
// 						<custom-text>${label}</custom-text>
// 					</label>
// 				`;

// 		/* Dependiendo de la page el formulario tiene más o menos datos, tienen que ser forms distintos porque guardan distinta información también */
// 		/* El problema está en que si quiero reutilizar el fieldset, no se cómo hacer que espere a que todos los inputs esten completados y recien ahí se pueda mandar el form */
// 				const formEl = this.shadow.querySelector('.welcome-form');

// 		formEl?.addEventListener('submit', (e: Event) => {
// 			e.preventDefault();
// 			const form = e.target as HTMLFormElement;
// 			const inputTextValue = form.text.value;
// 			state.setState({
// 				...state.getState(),
// 				name: inputTextValue,
// 			});
// 		});

// 		const style = document.createElement('style');
// 		style.textContent = `
// 						* {
// 							box-sizing: border-box;
// 						}
// 						`;
// 		this.shadow.appendChild(style);
// 	}
// }
// customElements.define('custom-fieldset', FieldsetComponent);
