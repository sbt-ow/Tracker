<script>
    export let price
    export let dodChange
    export let dodPercent
</script>
<div class="col-6">
    <!-- This is the current price -->
    <p class="lcd">${price}</p>
    <!-- This is the change -->
    <p class="regulartext">Day Change: {dodChange} | {dodPercent}</p>
</div>