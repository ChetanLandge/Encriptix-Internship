const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
          'https://ut66bac7fw5rmn73hc3kyptjni0hmmws.lambda-url.ap-south-1.on.aws/'
    );
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
updateCounter();
