import { state } from '../../src/state';

export function formPage(params) {
	const lastState = state.getState(); // No sé si está bien usar el state en la page, pero no se me ocurre otra cosa para poner el lastState.name
	const div = document.createElement('div');

	div.innerHTML = ` 
      <custom-header></custom-header>
      <div class="content-container">
        <custom-text variant="title">Hola ${lastState.name}</custom-text>
        <custom-text variant="large">Necesitamos algunos datos más</custom-text>
        <div class="fieldset-container">  
          <custom-fieldset label="Email" inputId="email" inputType="email"></custom-fieldset>
        </div>
        <div class="fieldset-container">  
          <custom-fieldset label="Comida favorita" inputId="comida-fav" inputType="text"></custom-fieldset>
        </div>
        <div class="fieldset-container">  
          <label for="options-select">Alguna de estas tres opciones:</label>
          <select name="options" id="options-select">
            <option value="Piedra">Piedra</option>
            <option value="Madera">Madera</option>
            <option value="Ladrillo">Ladrillo</option>
          </select>
        </div>
        <custom-button class="submit-button">Continuar</custom-button>
        <div class="button-container"> 
         <custom-button class="go-back-button">Volver</custom-button>
        </div>
      </div>
     <custom-footer></custom-footer>
        `;

	const submitButton = div.querySelector('.submit-button');
	submitButton?.addEventListener('click', () => params.goTo('/thankyou'));
	const goBackButton = div.querySelector('.go-back-button');
	goBackButton?.addEventListener('click', () => params.goTo('/welcome'));
	return div;
}
