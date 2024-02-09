import { welcomePage } from './pages/welcome';
import { formPage } from './pages/form';
import { thankYouPage } from './pages/thank-you';

/* Agregar lo de BASE PATH que me dijo fache */

/* Tengo que ver como poner las rutas para que se pueda usar en "produccion" */
const routes = [
	{
		path: /\/dwf-n2-ejercicio_wizard\/welcome/,
		/* /\/welcome/ */
		component: welcomePage,
	},
	{
		path: /\/dwf-n2-ejercicio_wizard\/form/,
		/* /\/form/ */
		component: formPage,
	},
	{
		path: /\/dwf-n2-ejercicio_wizard\/thankyou/,
		/* /\/thankyou/ */
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

	if (location.pathname === '/' || location.pathname === '/dwf-n2-ejercicio_wizard/') {
		goTo('/dwf-n2-ejercicio_wizard/welcome');
		// goTo('/welcome');
	} else handleRoute(location.pathname);

	window.onpopstate = () => handleRoute(location.pathname);
}
