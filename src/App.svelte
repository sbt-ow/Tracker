<script>
import Tracker from './components/Track.svelte'
async function postData(url = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=HAL%2CSNOW%2CAAPL') {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
		'x-api-key': 'yo put the key here!'
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
const promise = postData('https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=HAL%2CSNOW%2CAAPL')
</script>


{#await promise}
<p>hi</p>
{:then stock}
			<Tracker 
			name={stock.quoteResponse.result[0].symbol} 
			price={stock.quoteResponse.result[0].regularMarketPrice}
			/>

{:catch error}
{error}
{/await}