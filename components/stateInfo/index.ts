import { state } from '../../src/state';

class StateInfoComponent extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });
	// greeting: string;

	constructor() {
		super();
		state.subscribe(() => this.syncWithState());
		this.syncWithState();
	}

	syncWithState() {
		const lastState = state.getState();
		// this.greeting = lastState.name;
		// this.render();
	}

	render() {
		this.shadow.innerHTML = `
            <></>
        `;

		const style = document.createElement('style');
		style.textContent = `
						
						`;

		this.shadow.appendChild(style);
	}
}
customElements.define('state-info', StateInfoComponent);
