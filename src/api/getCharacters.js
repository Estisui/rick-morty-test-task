import defaultLink from "./defaultLink";

const getCharacters = (link = defaultLink) => {
  return fetch(link).then((res) => res.json());
};

export default getCharacters;
