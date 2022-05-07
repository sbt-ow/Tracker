<script>
	import Name from './Name.svelte';
	import Price from './Price.svelte'
    export let ticker
    export let price
	export let fullName
	
</script>
<hr class="dashed">
<div class="row">
	<Name ticker={ticker} fullName={fullName}/>
	<Price price={price}/>
</div>

