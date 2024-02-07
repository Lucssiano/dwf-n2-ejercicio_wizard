export const state = {
	data: {
		name: '',
		email: '',
		favFood: '',
		optionSelected: '',
	},
	listeners: [],
	getState() {
		return this.data;
	},
	setState(newState) {
		this.data = newState;
		this.listeners.forEach((callback) => callback());
	},
	subscribe(callback: (any) => any) {
		this.listeners.push(callback);
	},
};
