<script>

  // Svelte Components
import Tracker from './components/Track.svelte'
import Time from 'svelte-time'
// Getting the URL
  let Link = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='

// fetching the tickers
  async function getUsers() {
    let response = await fetch('./tick.json');
    let users = await response.json();
    return users;
  }
  // do i still need the const people?
  // const people =  getUsers();

  // wrap the whole thing to wait for it to finish for the bottom stuff to execute
  const promise = getUsers().then(
    // getUsers().then (
        (people) => {
          // this is pooping out the tickers into the console
          console.log(people)

    // Building the Tickers
      let text = ''
      let thingsToQuery = `${people[0].name}%2C`;
        for (let i = 1; i < people.length; i++) {
          text = `${people[i].name}%2C`;
          thingsToQuery = thingsToQuery.concat('',text) 
        }
    // Build the URL
      thingsToQuery = thingsToQuery.slice(0,-3)
      let theAPI = Link.concat(thingsToQuery)
      // this is pooping out the api link into the console
      console.log(theAPI)


      // Query API
      // async function postData(url = theAPI) {
      // const response = await fetch(url, {
      //   method: 'GET',
      //   headers: {
      //   'x-api-key': '8gOgZjoK4a6tKZ9MjGIoZ5c51VXtsaHD59nXqyzV'
      //   },
      // });
      // return response.json(); // parses JSON response into native JavaScript objects
      // }
      // let part2 = postData(theAPI)

      // // this is pooping out the contents of the query
      // console.log('this is inside the query')
      // console.log(part2)

      }
    )
  // )
  console.log('this is calling "promise" outside of everything')
  console.log(promise)
  async function postData(url = theQuery) {
      theQuery = await promise
      const response = await fetch(url, {
        method: 'GET',
        headers: {
        'x-api-key': '8gOgZjoK4a6tKZ9MjGIoZ5c51VXtsaHD59nXqyzV'
        },
      });
      return response.json(); // parses JSON response into native JavaScript objects
      }
      let part2 = postData(theQuery)

      // this is pooping out the contents of the query
      console.log('this is inside the query postdata query')
      console.log(part2)

// async function postData(url = theAPI) {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
// 		'x-api-key': 'the api key'
//     },
//   });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
//   const promise = postData(theAPI)



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
<!-- poops out error for reasons, like missing key-->
<p class="bg-error text-white thetop is-center">hi please add the key! it's in the app.svelte page right now until later! get the key from <a href="https://www.yahoofinanceapi.com/">this website</a> over here!</p>
<p class="bg-error text-white is-center ">anyways yote</p>
<div class="is-center">
<img 
  src="./403.jpg" 
  alt="bedyote" 
  width="400"
  height="300">

</div>
{:then stocks}
  {#each stocks as stock}
    	<Tracker ticker={stock.name}
			price={stock}
      fullName={stock}
			/>
  {/each}

{:catch error}
{error}<p class="bg-error text-light">hello this is an error D: lemme know how u got here</p>
{/await}



<!-- {#each people as stock}
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
  ticker={stock.quoteResponse}
  price={stock.quoteResponse}
  fullName={stock.quoteResponse}
  />
  {:catch error}
  {error}<p class="bg-error text-light">hello this is an error D: lemme know how u got here</p>
{/await}
  
{/each} -->