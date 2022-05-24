<script>

    // Get the URL and Tickers
import Tickers from '../public/tick.json';
import Tracker from './components/Track.svelte';
import Clock from './components/Clock.svelte'
import apiFetch from './scripts/apiFetch'
import {upDown,posNeg} from './scripts/apiValues'
console.log(Tickers.length)
</script>

<Clock/>

{#await apiFetch}
<p>loading...</p>
    {:then stock}

        {#each Tickers as {name}, i}
            {#if i > 0}
                <hr class="dashed">
            {/if}
            <Tracker 
                ticker={name} 
                fullName={stock.quoteResponse.result[i].longName} 
                price={stock.quoteResponse.result[i].regularMarketPrice.toFixed(2)}
                dodChange={upDown(stock.quoteResponse.result[i].regularMarketChange.toFixed(2))}
                dodPercent={stock.quoteResponse.result[i].regularMarketChangePercent.toFixed(2)}
                upDown={[posNeg(stock.quoteResponse.result[i].regularMarketChange)]}
            />
        {/each}
        
    {:catch}
    <div class="bd-error text-white thetop text-center">
        <p>hi please add the key! get the key from <a href="https://www.yahoofinanceapi.com/">over here!</a></p>
        <p>anyways yote</p>
    </div>
    
    <div class="is-center">
        <img 
        src="./403.jpg" 
        alt="bedyote" 
        width="400"
        height="300">
    </div>

{/await}

