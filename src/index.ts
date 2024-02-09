import { initRouter } from './router';
import './components/header';
import './components/text';
import './components/greeting';
// import '../components/fieldset';
import './components/form-welcome-page';
import './components/form-greeting-page';
import './components/return-button';
import './components/stateInfo';
import './components/footer';

(function main() {
	const root = document.querySelector('.root');
	if (root) initRouter(root);
})();
