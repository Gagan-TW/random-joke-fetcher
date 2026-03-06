const jokebtn = document.getElementById('jokeBtn');
const statusText = document.getElementById('statusText');
const jokeText = document.getElementById('jokeText');
 console.log(jokebtn);
 jokebtn.onclick = function() {
    console.log('Button Clicked');
    statusText.textContent = 'Loading...';
    jokeText.textContent = '';
    fetchJoke();
 }

 async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        jokeText.textContent = `${data.setup} - ${data.punchline}`;
        statusText.textContent = 'Here is your joke:';
        return data;
    } catch (error) {
        statusText.textContent = 'Failed to fetch joke.';
        console.error('Error fetching joke:', error);
    }
 }

 