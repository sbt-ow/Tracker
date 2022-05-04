<script>
	import Name from './Name.svelte';
	import Price from './Price.svelte'
    export let name
    export let price
	
</script>
<div class="row">
	<Name name={name}/>
	<Price price={price}/>
</div>
<hr class="dashed">
