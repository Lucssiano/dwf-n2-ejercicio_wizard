import { welcomePage } from '../pages/welcome';
import { formPage } from '../pages/form';
import { thankYouPage } from '../pages/thank-you';

/* Tengo que ver como poner las rutas para que se pueda usar en "produccion" */
const routes = [
	{
		path: /\/welcome/,
		component: welcomePage,
	},
	{
		path: /\/form/,
		component: formPage,
	},
	{
		path: /\/thankyou/,
		component: thankYouPage,
	},
];

export function initRouter(container: Element) {
	function goTo(path) {
		history.pushState({}, '', path);
		handleRoute(path);
	}

	function handleRoute(route) {
		for (const r of routes) {
			if (r.path.test(route)) {
				const el = r.component({ goTo: goTo });
				if (container.firstChild) container.firstChild.remove();
				container.appendChild(el);
			}
		}
	}

	if (location.pathname === '/') {
		goTo('/welcome');
	} else handleRoute(location.pathname);

	window.onpopstate = () => handleRoute(location.pathname);
}
