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

	/* CREO QUE HABRIA QUE HACER LOS FORMS EN CADA PÁGINA PORQUE UN FORMULARIO TIENE UN SOLO INPUT Y LOS OTROS TIENEN MÁS DE UN INPUT */
	const formEl = div.querySelector('custom-fieldset')?.shadowRoot?.querySelector('form');
	formEl?.addEventListener('submit', (e) => {
		e.preventDefault();
		params.goTo('/form');
	});

	/* EL BOTON NO ME LO TOMA COMO UN SUBMIT */
	// const formButtonEl = formEl?.querySelector('custom-button')?.shadowRoot?.querySelector('button');
	// formButtonEl?.addEventListener('click', () => {
	// 	params.goTo('/form');
	// });
	return div;
}
