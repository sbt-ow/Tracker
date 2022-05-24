<script>
    export let ticker
    export let price
	export let fullName
	export let dodChange
	export let dodPercent
	export let upDown
</script>
<div>
	<div class="row">
		<div class="col-6">
			<p class="tr-head text-center fw-200">${ticker} | ${price}</p>
			<p class="text-center fullName">{fullName}</p>
		</div>
	
		<div class="col tr-sub text-center">
			<div class="fw-200">Day Change</div> 
			<div class={upDown}>{dodChange} | {dodPercent}%</div>
		</div>
	</div>
</div>