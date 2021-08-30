/* # Ejercicio 5

Consigue una lista con los nombres de los personajes de la serie Rick and Morty que aparecen en los episodios lanzados en el mes de enero (el año no importa).

Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/'
 */
const URL = 'https://rickandmortyapi.com/api/episode';

async function getCharacterName(url) {
  try {
    const episodesArray = [];
    const response = await fetch(`${url}`);
    const data = await response.json();

    const pages = data.info.pages;

    for (let index = 1; index <= pages; index++) {
      if (data.info.next != null) {
        const response = await fetch(`${url}?page=${index}`);
        const data = await response.json();

        const episodes = data.results.filter((episode) => {
          if (episode.air_date.includes('January')) {
            episodesArray.push(episode.characters);
          }
        });
      }
    }

    // console.log(episodesArray);

    const charNames = [];

    for (const character of episodesArray) {
      for (let index = 0; index < character.length; index++) {
        const response = await fetch(character[index]);
        const data = await response.json();

        charNames.push(data.name);
      }
    }

    console.log(charNames);
  } catch (error) {
    console.log(error);
  }
}

getCharacterName(URL);
