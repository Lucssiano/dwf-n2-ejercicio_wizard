export function thankYouPage(params) {
	const div = document.createElement('div');
	div.innerHTML = ` 
    <custom-header></custom-header>
    <div class="content-container">
        <custom-text variant="title">Gracias</custom-text>
        <div class="large-title-container my-25">  
          <custom-text variant="large" class="large-title">Toda la información que nos brindaste es muy importante</custom-text>
        </div>
        <custom-button class="submit-button">De nada</custom-button>
    </div>
    <custom-footer></custom-footer>
        `;
	const submitButton = div.querySelector('.submit-button');
	submitButton?.addEventListener('click', () => params.goTo('/welcome'));
	return div;
}
