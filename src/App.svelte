<script>

    // Get the URL and Tickers
import darkMode from './scripts/darkMode'
import Tickers from '../public/tick.json';
import Tracker from './components/Track.svelte';
import Clock from "./components/Clock.svelte";
import apiFetch from './scripts/apiFetch'
import {upDown,posNeg} from './scripts/apiValues'

darkMode()
</script>

<Clock/>

<div class="row">
  <div class="col thetop">
  </div>
</div> 
{#await apiFetch}
<p>loading...</p>
    {:then stock}

        {#each Tickers as {name}, i}
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

    <p class="bg-error text-white thetop is-center">hi please add the key! it's in the app.svelte page right now until later! get the key from <a href="https://www.yahoofinanceapi.com/">this website</a> over here!</p>
    <p class="bg-error text-white is-center ">anyways yote</p>
    <div class="is-center">
    <img 
    src="./403.jpg" 
    alt="bedyote" 
    width="400"
    height="300">
</div>

{/await}

