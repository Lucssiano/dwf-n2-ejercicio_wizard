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
          <custom-fieldset label="Nombre" inputId="name" inputPlaceholder="Ingresá tu nombre"}></custom-fieldset>
         </div>
        </div>
        <custom-footer></custom-footer>
        `;
	const formEl = div.querySelector('custom-fieldset')?.shadowRoot?.querySelector("form");
	formEl?.addEventListener('submit', (e) => {
		e.preventDefault();
		// const form = e.target as HTMLFormElement;
		// console.log(form.name.valueOf); // me ofrece value of aunque siempre usamos value
                params.goTo("/form");
	});
	return div;
}
