import { state } from '../../src/state';

class GreetingComponent extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });
	greeting: string;

	constructor() {
		super();
		state.subscribe(() => this.syncWithState());
		this.syncWithState();
	}

	syncWithState() {
		const lastState = state.getState();
		this.greeting = lastState.name;
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
        <custom-text variant="title">Hola ${this.greeting}</custom-text>
    `;

		const style = document.createElement('style');
		style.textContent = `
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
						`;

		this.shadow.appendChild(style);
	}
}
customElements.define('custom-greeting', GreetingComponent);
