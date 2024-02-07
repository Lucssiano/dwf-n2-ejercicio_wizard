const t=[{path:/\/dwf-n2-ejercicio_wizard\/welcome/,component:function(t){let e=document.createElement("div");e.innerHTML=` 
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
           <welcome-form class="welcome-form"></welcome-form>
         </div>
        </div>
        <custom-footer></custom-footer>
        `;let o=e.querySelector("welcome-form"),n=o?.shadowRoot?.querySelector("form");return n?.addEventListener("submit",e=>{e.preventDefault(),t.goTo("/form")}),e}},{path:/\/dwf-n2-ejercicio_wizard\/form/,component:function(t){let e=document.createElement("div");e.innerHTML=`  
      <custom-header></custom-header>
      <div class="content-container">
        <custom-greeting variant="title"></custom-greeting> 
        <custom-text variant="large">Necesitamos algunos datos m\xe1s</custom-text>
        <greeting-form></greeting-form>
        <return-button>Volver</return-button>
      </div>
      <custom-footer></custom-footer>
        `;let o=e.querySelector("greeting-form"),n=o?.shadowRoot?.querySelector("form");n?.addEventListener("submit",e=>{e.preventDefault(),t.goTo("/thankyou")});let s=e.querySelector("return-button")?.shadowRoot?.querySelector("button");return s?.addEventListener("click",()=>t.goTo("/welcome")),e}},{path:/\/dwf-n2-ejercicio_wizard\/thankyou/,component:function(t){let e=document.createElement("div");e.innerHTML=` 
    <custom-header></custom-header>
    <div class="content-container">
        <custom-text variant="title">Gracias</custom-text>
        <div class="large-title-container my-25">  
          <custom-text variant="large" class="large-title">Toda la informaci\xf3n que nos brindaste es muy importante</custom-text>
        </div>
        <div class="body-text-container">  
          <custom-text variant="large">Datos recopilados:</custom-text>
          <state-info></state-info>
        </div>
        <return-button class="submit-button">Volver al inicio</return-button>
    </div>
    <custom-footer></custom-footer>
        `;let o=e.querySelector("return-button")?.shadowRoot?.querySelector("button");return o?.addEventListener("click",()=>t.goTo("/welcome")),e}}];class e extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.attachShadow({mode:"open"}),e=document.createElement("header");e.classList.add("header"),e.textContent="Header";let o=document.createElement("style");o.textContent=`
					.header {
						font-family : 'Poppins' , sans-serif;
						font-size: 22px;
						font-weight: 500;
						background-color: #FF8282;
						text-align: center;
						padding: 20px 0;
					}
			`,t.appendChild(o),t.appendChild(e)}}customElements.define("custom-header",e);class o extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.getAttribute("variant")||"body",e=this.attachShadow({mode:"open"}),o=document.createElement("div");o.textContent=this.textContent,o.className=t;let n=document.createElement("style");n.textContent=`
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
						`,e.appendChild(n),e.appendChild(o)}}customElements.define("custom-text",o);const n={data:{name:"",email:"",favFood:"",optionSelected:""},listeners:[],getState(){return this.data},setState(t){this.data=t,this.listeners.forEach(t=>t())},subscribe(t){this.listeners.push(t)}};class s extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),n.subscribe(()=>this.syncWithState()),this.syncWithState()}syncWithState(){let t=n.getState();this.greeting=t.name,this.render()}render(){this.shadow.innerHTML=`
        <custom-text variant="title">Hola ${this.greeting}</custom-text>
    `}}customElements.define("custom-greeting",s);class i extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`
					<form class="welcome-form">
            <label for="name">
              <custom-text>Nombre</custom-text>
            </label>
            <input class="input" id="name" type="text" placeholder="Ingres\xe1 tu nombre" name="text" required>
            <button class="submit-button"><custom-text variant="large">Comenzar</custom-text></button>
          </form>
  				`;let t=this.shadow.querySelector(".welcome-form");t?.addEventListener("submit",t=>{t.preventDefault();let e=t.target.text.value;n.setState({...n.getState(),name:e})});let e=document.createElement("style");e.textContent=`
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
						`,this.shadow.appendChild(e)}}customElements.define("welcome-form",i);class a extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`
					<form class="greeting-form">
            <div class="fieldset-container">
              <label for="email">
                <custom-text>Email</custom-text>
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

            <button class="submit-button"><custom-text variant="large">Continuar</custom-text></button>
          </form>
  				`;let t=this.shadow.querySelector(".greeting-form");t?.addEventListener("submit",t=>{t.preventDefault();let e=t.target,o=e.email.value,s=e.favFood.value,i=e.options.value;n.setState({...n.getState(),email:o,favFood:s,optionSelected:i})});let e=document.createElement("style");e.textContent=`
              * {
                box-sizing: border-box;
              }
              .greeting-form {
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
						`,this.shadow.appendChild(e)}}customElements.define("greeting-form",a);class r extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=`
		<button class="go-back-button"><custom-text variant="large">${this.textContent}</custom-text></button>
		`;let t=document.createElement("style");t.textContent=`
						* {
							box-sizing: border-box;
						}
						.go-back-button {
							margin-top: 10px;
							font-family: 'Poppins', sans-serif;
              font-size: 18px;
              font-weight: 500;
              cursor: pointer;
              border: none;
							border-radius: 4px;
              padding: 15px 0;
              text-align: center;
              width: 100%;
							border: 2px solid #000;
							background-color:#fff;
						}
						`,this.shadow.appendChild(t)}}customElements.define("return-button",r);class c extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.stateObject=n.getState(),n.subscribe(()=>this.syncWithState()),this.syncWithState()}syncWithState(){let t=n.getState();this.stateObject=t,this.render()}render(){for(let t in this.stateObject){let e=this.stateObject[t];this.shadow.innerHTML+=`<custom-text class="state-key">${t}: ${e}</custom-text>`}}}customElements.define("state-info",c);class d extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.attachShadow({mode:"open"}),e=document.createElement("footer");e.classList.add("footer"),e.textContent="Footer";let o=document.createElement("style");o.textContent=`
					.footer {
						font-family : 'Poppins' , sans-serif;
						font-size: 22px;
						font-weight: 500;
						background-color: #FFA0EA;
						text-align: center;
						padding: 105px 0;
					}
			`,t.appendChild(o),t.appendChild(e)}}customElements.define("custom-footer",d),function(){let e=document.querySelector(".root");e&&function(e){function o(t){history.pushState({},"",t),n(t)}function n(n){for(let s of t)if(s.path.test(n)){let t=s.component({goTo:o});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}}"/"===location.pathname||"/dwf-n2-ejercicio_wizard/"===location.pathname?o("/dwf-n2-ejercicio_wizard/welcome"):n(location.pathname),window.onpopstate=()=>n(location.pathname)}(e)}();
//# sourceMappingURL=index.e4c10509.js.map
