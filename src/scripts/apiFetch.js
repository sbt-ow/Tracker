import theKeysForAPI from '../../public/keys.json';
import Tickers from '../../public/tick.json';

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
    'x-api-key': TheKey
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.json)
  }

}
const apiFetch = postData(theAPI, TheKey)

export default apiFetch;