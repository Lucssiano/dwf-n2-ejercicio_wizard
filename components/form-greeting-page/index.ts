import { state } from '../../src/state';

class greetingFormComponent extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });

	constructor() {
		super();
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
					<form class="welcome-form">
            <div class="fieldset-container">
              <label for="email">
                <custom-text>Nombre</custom-text>
              </label>
              <input class="input" id="email" type="email" name="email" required>
            </div>
           
            <div class="fieldset-container">
              <label for="comida-fav">
                <custom-text>Comida Favorita</custom-text>
              </label>
              <input class="input" id="comida-fav" type="text" name="favFood" required>
            </div>
            
            <div class="fieldset-container">
              <label for="options-select">
                <custom-text>Alguna de estas tres opciones:</custom-text>
              </label>  
              <select name="options" id="options-select" class="options-select-item">
                <option value="Piedra">Piedra</option>
                <option value="Madera">Madera</option>
                <option value="Ladrillo">Ladrillo</option>
              </select>
            </div>

            <button class="submit-button"><custom-text variant="large">Comenzar</custom-text></button>
          </form>
  				`;

		/* Dependiendo de la page el formulario tiene más o menos datos, tienen que ser forms distintos porque guardan distinta información también */
		/* El problema está en que si quiero reutilizar el fieldset, no se cómo hacer que espere a que todos los inputs esten completados y recien ahí se pueda mandar el form */
		// const formEl = this.shadow.querySelector('.welcome-form');

		// formEl?.addEventListener('submit', (e: Event) => {
		// 	e.preventDefault();
		// 	const form = e.target as HTMLFormElement;
		// 	const inputTextValue = form.text.value;
		// 	state.setState({
		// 		...state.getState(),
		// 		name: inputTextValue,
		// 	});
		// });

		/* FALTA HACER ESTO */

		const style = document.createElement('style');
		style.textContent = `
              * {
                box-sizing: border-box;
              }
              .welcome-form {
                margin: 10px 0;
                display: flex;
                flex-direction: column;
                gap: 10px;
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
                font-family: 'Poppins', sans-serif;
                font-size: 18px;
                font-weight: 500;
  							cursor: pointer;
                border: none;
  							border-radius: 4px;
                padding: 15px 0;
                text-align: center;
                width: 100%;
                background-color:#9CBBE9;
                margin-top: 20px;
  						}
              .options-select-item {
                font-family: 'Poppins', sans-serif;
                font-size: 18px;
                border-radius: 4px;
                border: 2px solid #000;
                padding: 17px 13px;
                width: 100%;
              }
              .input::placeholder {
                color: #ccc;
              }
						`;
		this.shadow.appendChild(style);
	}
}

customElements.define('greeting-form', greetingFormComponent);
