<script>
import Tracker from './components/Track.svelte'
import Time from 'svelte-time'


// Getting the URL
let Link = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols='

async function getUsers () {
    let response = await fetch('./tick.json');
    let users = await response.json();
    return users;
}

// const getTheUsers = new Promise((resolve, reject) => {
//     getUsers().then(
//         (people) => {
//             console.log(people)
//         }   
//     )
//     setTimeout(() => {
//         resolve('hey');
//     }, 500);
// });

// const buildTheQuery = new Promise((resolve, reject) => {
//     let text = ''
//     let thingsToQuery = `${getTheUsers[0].name}%2C`;
//         for (let i = 1; i < getTheUsers.length; i++) {
//             text = `${getTheUsers[0].name}%2C`;
//             thingsToQuery = thingsToQuery.concat('',text)
//         }
//     resolve('hey is this working?')
// })

// console.log(buildTheQuery)

// outputs the value of resolve in console
// promise1.then((value) => {
//     console.log(value);
// })

// async function getLink() {
//     getUsers().then(
//         (people) => {
//             console.log(people)
//             let text = ''
//             let thingsToQuery = `${people[0].name}%2C`;
//             for (let i = 1; i < people.length; i++) {asy
//                 text = `${people[i].name}%2C`;
//                 thingsToQuery = thingsToQuery.concat('',text)
//             }
//         }
        
//     )
// } 

// console.log(getLink(thingsToQuery))

    async function postData(url = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=HAL%2CSNOW%2CAAPL') {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
        'x-api-key': 'aaaaa'
        },
      });
      return response.json(); // parses JSON response into native JavaScript objects
      }
      const theQuery = postData('https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=HAL%2CSNOW%2CAAPL')

console.log(postData)
</script>



<!-- {#each people as stock}
{#await getUsers()}

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
  ticker={stock.quoteResponse.result.symbol}
  price={stock.quoteResponse.result.regularMarketPrice}
  fullName={stock.quoteResponse.result.longName}
  />
  {:catch error}
  {error}<p class="bg-error text-light">hello this is an error D: lemme know how u got here</p>
{/await}
  
{/each} -->