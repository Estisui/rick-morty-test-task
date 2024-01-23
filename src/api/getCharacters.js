const getCharacters = () => {
  return fetch("https://rickandmortyapi.com/api/character").then((res) => res.json());
};

export default getCharacters;
