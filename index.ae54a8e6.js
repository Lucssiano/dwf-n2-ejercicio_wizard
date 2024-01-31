const t={data:{name:"",email:"",favFood:"",optionSelected:""},listeners:[],getState(){return this.data},setState(t){this.data=t,this.listeners.forEach(t=>t()),console.log("nueva data",this.data)},subscribe(t){this.listeners.push(t)}},e=[{path:/\/welcome/,component:function(t){let e=document.createElement("div");e.innerHTML=` 
        <custom-header></custom-header>
        <div class="content-container">
         <custom-text variant="title">Te damos la bienvenida a esta p\xe1gina</custom-text>
         <div class="body-text-container">  
          <custom-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</custom-text>
         </div>
         <div class="large-title-container">  
          <custom-text variant="large" class="large-title">Para continuar ingres\xe1 tu nombre</custom-text>
         </div>
         <div class="fieldset-container">  
          <custom-fieldset label="Nombre" inputId="name" inputPlaceholder="Ingres\xe1 tu nombre"></custom-fieldset>
	  <custom-button>Comenzar</custom-button> 
          </div>
        </div>
        <custom-footer></custom-footer>
        `;let o=e.querySelector("custom-fieldset")?.shadowRoot?.querySelector("form");return o?.addEventListener("submit",e=>{e.preventDefault(),t.goTo("/form")}),e}},{path:/\/form/,component:function(e){let o=t.getState(),n=document.createElement("div");n.innerHTML=` 
      <custom-header></custom-header>
      <div class="content-container">
        <custom-text variant="title">Hola ${o.name}</custom-text>
        <custom-text variant="large">Necesitamos algunos datos m\xe1s</custom-text>
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
        `;let s=n.querySelector(".submit-button");s?.addEventListener("click",()=>e.goTo("/thankyou"));let a=n.querySelector(".go-back-button");return a?.addEventListener("click",()=>e.goTo("/welcome")),n}},{path:/\/thankyou/,component:function(t){let e=document.createElement("div");e.innerHTML=` 
    <custom-header></custom-header>
    <div class="content-container">
        <custom-text variant="title">Gracias</custom-text>
        <div class="large-title-container my-25">  
          <custom-text variant="large" class="large-title">Toda la informaci\xf3n que nos brindaste es muy importante</custom-text>
        </div>
        <div class="body-text-container">  
          <custom-text>Datos recopilados:</custom-text>
        </div>
        <custom-button class="submit-button">Volver al inicio</custom-button>
    </div>
    <custom-footer></custom-footer>
        `;let o=e.querySelector(".submit-button");return o?.addEventListener("click",()=>t.goTo("/welcome")),e}}];class o extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.attachShadow({mode:"open"}),e=document.createElement("header");e.classList.add("header"),e.textContent="Header";let o=document.createElement("style");o.textContent=`
					.header {
						font-family : 'Poppins' , sans-serif;
						font-size: 22px;
						font-weight: 500;
						background-color: #FF8282;
						text-align: center;
						padding: 20px 0;
					}
			`,t.appendChild(o),t.appendChild(e)}}customElements.define("custom-header",o);class n extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.getAttribute("variant")||"body",e=this.attachShadow({mode:"open"}),o=document.createElement("div");o.textContent=this.textContent,o.className=t;let n=document.createElement("style");n.textContent=`
						.body {
								font-family: 'Poppins', sans-serif;
								font-size: 18px;
						}
						.title {
								font-family: 'Poppins', sans-serif;
								font-size: 52px;
								font-weight: 700;
						}
						.large {
								font-family: 'Poppins', sans-serif;
								font-size: 22px;
								font-weight: 500;
						}
						`,e.appendChild(n),e.appendChild(o)}}customElements.define("custom-text",n);class s extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=this.getAttribute("label")||"Label",o=this.getAttribute("inputId")||"inputId",n=this.getAttribute("inputType")||"text",s=this.getAttribute("inputPlaceholder")||".";this.shadow.innerHTML=`
				<form class="welcome-form">
					<label for=${o}>
						<custom-text>${e}</custom-text>
					</label>
					<input class="input" id=${o} type=${n} placeholder=${s} name="text" required>
				</form>
					`;let a=this.shadow.querySelector(".welcome-form");a?.addEventListener("submit",e=>{e.preventDefault();let o=e.target.text.value;t.setState({...t.getState(),name:o})});let i=document.createElement("style");i.textContent=`
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
						
						`,this.shadow.appendChild(i)}}customElements.define("custom-fieldset",s);class a extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`
		<button><custom-text variant="large">${this.textContent}</custom-text></button>
		`;let t=this.shadowRoot?.querySelector("button"),e=t?.textContent;t&&("Volver"==e?t.className="go-back-button":t.className="submit-button");let o=document.createElement("style");o.textContent=`
						* {
							box-sizing: border-box;
						}
						.submit-button, .go-back-button {
							cursor: pointer;
              border: none;
							border-radius: 4px;
              padding: 15px 0;		
              text-align: center;		
              width: 100%;
						}
						.submit-button {
              background-color:#9CBBE9;			
							margin-top: 20px;
							font-family: 'Poppins', sans-serif;	
							font-size: 18px;
							font-weight: 500;
						}
						.go-back-button {
							border: 2px solid #000;
							background-color:#fff;			
						}
						`,this.shadow.appendChild(o)}}customElements.define("custom-button",a);class i extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.attachShadow({mode:"open"}),e=document.createElement("footer");e.classList.add("footer"),e.textContent="Footer";let o=document.createElement("style");o.textContent=`
					.footer {
						font-family : 'Poppins' , sans-serif;
						font-size: 22px;
						font-weight: 500;
						background-color: #FFA0EA;
						text-align: center;
						padding: 105px 0;
					}
			`,t.appendChild(o),t.appendChild(e)}}customElements.define("custom-footer",i),function(){let t=document.querySelector(".root");t&&function(t){function o(t){history.pushState({},"",t),n(t)}function n(n){for(let s of e)if(s.path.test(n)){let e=s.component({goTo:o});t.firstChild&&t.firstChild.remove(),t.appendChild(e)}}"/"===location.pathname?o("/welcome"):n(location.pathname),window.onpopstate=()=>n(location.pathname)}(t)}();
//# sourceMappingURL=index.ae54a8e6.js.map
