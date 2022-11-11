const button = document.querySelector('.btn');
const image = document.querySelector('.img');
const url = 'https://aws.random.cat/meow';

//совершает запрос
async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data.file;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener('click', () => {
  let isLoaded = image.complete;
  if (isLoaded) {
    fetchHandler();
  }
});
