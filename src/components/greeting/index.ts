import { state } from '../../state';

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
	}
}
customElements.define('custom-greeting', GreetingComponent);
