import { initRouter } from './router';
import '../components/header';
import '../components/text';
import '../components/greeting';
import '../components/fieldset';
import '../components/button';
import '../components/footer';

(function main() {
	const root = document.querySelector('.root');
	if (root) initRouter(root);
})();
