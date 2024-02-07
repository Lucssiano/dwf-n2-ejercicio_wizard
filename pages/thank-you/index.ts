export function thankYouPage(params) {
	const div = document.createElement('div');
	div.innerHTML = ` 
    <custom-header></custom-header>
    <div class="content-container">
        <custom-text variant="title">Gracias</custom-text>
        <div class="large-title-container my-25">  
          <custom-text variant="large" class="large-title">Toda la información que nos brindaste es muy importante</custom-text>
        </div>
        <div class="body-text-container">  
          <custom-text>Datos recopilados:</custom-text>
          <state-info></state-info>
        </div>
        <return-button class="submit-button">Volver al inicio</return-button>
    </div>
    <custom-footer></custom-footer>
        `;

	const goBackButton = div.querySelector('return-button')?.shadowRoot?.querySelector('button');
	goBackButton?.addEventListener('click', () => params.goTo('/welcome'));

	return div;
}
