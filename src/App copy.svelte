<script>
    // async function getUsers() {
    //     let response = await fetch ('./tick.json');
    //     let users = await response.json();
    //     return users;
    // }
    // const promise = getUsers();
	// import Track from './Track.svelte'



    var options = {
    method: 'GET',
    url: 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=HAL%2C%20SNOW%2C%20AAPL',
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
        'x-api-key': '8gOgZjoK4a6tKZ9MjGIoZ5c51VXtsaHD59nXqyzV'
    }
    };

    fetch(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
</script>


<!-- 

{#await promise}
<p>if you see this, report it</p>
{:then user}
	{#each user as user}
		<Track name={user.name} price={user.price}/>
	{/each}
{:catch error}
<p class="bg-error text-error">error lol!</p>
{/await} -->
