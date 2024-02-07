import { state } from '../../src/state';

class StateInfoComponent extends HTMLElement {
	shadow = this.attachShadow({ mode: 'open' });
	stateObject: any = state.getState();

	constructor() {
		super();
		state.subscribe(() => this.syncWithState());
		this.syncWithState();
	}

	syncWithState() {
		const lastState = state.getState();
		this.stateObject = lastState;
		this.render();
	}

	render() {
		for (const key in this.stateObject) {
			const element = this.stateObject[key];
			this.shadow.innerHTML += `<custom-text class="state-key">${key}: ${element}</custom-text>`;
		}
	}
}
customElements.define('state-info', StateInfoComponent);
