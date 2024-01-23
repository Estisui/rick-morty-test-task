const getCharacters = (link = "https://rickandmortyapi.com/api/character") => {
  return fetch(link).then((res) => res.json());
};

export default getCharacters;
