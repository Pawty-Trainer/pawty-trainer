export const fetchBreeds = () => {
  return fetch('https://api.thedogapi.com/v1/breeds', {
    headers: {
      'X-Api-Key': '519cd25b-a229-4cd2-a69c-ebcd7d8dea4f'
    }
  })
    .then((response) => response.json())
}