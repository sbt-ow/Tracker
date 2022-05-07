<script>

  // Svelte Components
import Tracker from './components/Track.svelte'
import Time from 'svelte-time'
// Getting the URL
  // let Link = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='

// fetching the tickers
  // async function getUsers() {
  //   let response = await fetch('./tick.json');
  //   let users = await response.json();
  //   return users;
  // }
  // const people = getUsers();

// Building the URL
  // let text = ''
  //   for (let i = 0; i < people.length; i++) {
  //     text += `${people[i].name}%2C`;
  //   }
  // console.log(text)

// console.log(people)
// console.log(people.join());

async function postData(url = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=HAL%2CSNOW%2CAAPL') {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
		'x-api-key': 'get your own key lol'
    },
  });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  const promise = postData('https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=HAL%2CSNOW%2CAAPL')



</script>
<!-- Hey this is like the top bar and clock -->
      <Time format="hh:mm a" live="{15 * 1000}" class="clock is-center is-fixed bg-primary"/>
<div class="row">
  <div class="col thetop">
  </div>
</div> 


<!-- For Testing -->

 <!-- <Tracker></Tracker>
 <Tracker></Tracker>
 <Tracker></Tracker>
 <Tracker></Tracker> -->

 <!-- Real -->

{#await promise}
<p class="bg-error text-white thetop is-center">hi please add the key! it's in the app.svelte page right now until later! get the key from <a href="https://www.yahoofinanceapi.com/">this website</a> over here!</p>
<p class="bg-error text-white is-center ">anyways yote</p>
<div class="is-center">
<img 
  src="./403.jpg" 
  alt="bedyote" 
  width="400"
  height="300">

</div>

{:then stock}
			<Tracker
			ticker={stock.quoteResponse.result[0].symbol}
			price={stock.quoteResponse.result[0].regularMarketPrice}
      fullName={stock.quoteResponse.result[0].longName}
			/>

			<Tracker
			ticker="TICKER"
			price="PRICE IN USD"
      fullName="The Whole Damn Name"
			/>

{:catch error}
{error}<p class="bg-error text-light">hello this is an error D: lemme know how u got here</p>
{/await}

