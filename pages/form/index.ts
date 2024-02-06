export function formPage(params) {
	const div = document.createElement('div');

	div.innerHTML = `  
      <custom-header></custom-header>
      <div class="content-container">
        <custom-greeting variant="title"></custom-greeting> 
        <custom-text variant="large">Necesitamos algunos datos más</custom-text>
        <greeting-form></greeting-form>
        <return-button>Volver</return-button>
      </div>
      <custom-footer></custom-footer>
        `;

	const greetingForm = div.querySelector('greeting-form');
	const formEl = greetingForm?.shadowRoot?.querySelector('form');

	formEl?.addEventListener('submit', (e) => {
		e.preventDefault();
		params.goTo('/thankyou');
	});

	const goBackButton = div.querySelector('return-button')?.shadowRoot?.querySelector('button');
	goBackButton?.addEventListener('click', () => params.goTo('/welcome'));

	return div;
}
