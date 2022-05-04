import App from './App.svelte';
import Name from './components/Name.svelte';
import Price from './components/Price.svelte'


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;