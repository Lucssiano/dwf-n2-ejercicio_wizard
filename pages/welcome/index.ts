export function welcomePage(params) {
	const div = document.createElement('div');
	div.innerHTML = ` 
        <custom-header></custom-header>
        <div class="content-container">
         <custom-text variant="title">Te damos la bienvenida a esta página</custom-text>
         <div class="body-text-container">  
          <custom-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</custom-text>
         </div>
         <div class="large-title-container">  
          <custom-text variant="large" class="large-title">Para continuar ingresá tu nombre</custom-text>
         </div>
         <div class="fieldset-container">
          <custom-fieldset label="Nombre" inputId="name" inputPlaceholder="Ingresá tu nombre"></custom-fieldset>
	  <custom-button>Comenzar</custom-button> 
         </div>
        </div>
        <custom-footer></custom-footer>
        `;

	/* DE ESTA MANERA EL FORMULARIO SOLO SE PUEDE ENVIAR DANDO ENTER EN EL INPUT, EL FORM NO SE PUEDE ENVIAR CON EL BOTON */
	const formEl = div.querySelector('custom-fieldset')?.shadowRoot?.querySelector('form');

	/* Solución para el boton pero que no chequea si el input está completado */
	// const shadowButtonEl = div.querySelector('custom-button')?.shadowRoot?.querySelector('button');

	// shadowButtonEl?.addEventListener('click', () => {
	// 	formEl?.dispatchEvent(new Event('submit'));
	// });

	formEl?.addEventListener('submit', (e) => {
		e.preventDefault();
		params.goTo('/form');
	});
	return div;
}
