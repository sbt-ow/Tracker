<script>
    // Get the URL and Tickers
import theKeysForAPI from '../public/keys.json';
import Tickers from '../public/tick.json';
import Tracker from './components/Track.svelte';
import  Clock from "./components/Clock.svelte";

const Link = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='
    // import apiKey from 'keys.json (make this urself)'
const TheKey = theKeysForAPI[0].KeyForAPI

    // Building the Tickers
let text = ''
let thingsToQuery = `${Tickers[0].name}%2C`;
        for (let i=1; i < Tickers.length; i++) {
            text = `${Tickers[i].name}%2C`;
            thingsToQuery = thingsToQuery.concat('',text)
            
        }
    thingsToQuery = thingsToQuery.slice(0,-3)
    // Make the Link
let theAPI = Link.concat(thingsToQuery)

async function postData(url, apiKey) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
    'x-api-key': apiKey
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
const apiFetch = postData(theAPI, TheKey)
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
            dodChange={stock.quoteResponse.result[i].regularMarketChange.toFixed(2)}
            dodPercent={stock.quoteResponse.result[i].regularMarketChangePercent.toFixed(2)}
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