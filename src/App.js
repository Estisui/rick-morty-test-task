import styled from "styled-components";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import getCharacters from "./api/getCharacters";
import PagesSwitch from "./components/PagesSwitch";
import Filter from "./components/Filter";

const Wrapper = styled.main`
  max-width: 1260px;
  margin: auto;
  padding: 20px 20px;
`;

const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 900;
  text-align: center;
  margin: 30px 0;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [pages, setPages] = useState({
    prev: null,
    next: null,
  });

  // function to get characters from api and update states
  const updateCharacters = (link) => {
    setIsLoaded(false);
    getCharacters(link).then(
      (result) => {
        setIsLoaded(true);
        if (!result.error) {
          setItems(result.results);
          setPages({
            prev: result.info.prev,
            next: result.info.next,
          });
        } else {
          setItems([]);
          setPages({
            prev: null,
            next: null,
          });
        }
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  };

  const onPrevClick = () => {
    updateCharacters(pages.prev);
  };

  const onNextClick = () => {
    updateCharacters(pages.next);
  };

  // get characters during first load
  useEffect(() => updateCharacters(), []);

  return (
    <Wrapper>
      <Title>Rick&Morty API App</Title>
      <Subtitle>Stepan Sukhachev for Elfsight</Subtitle>
      <Content>
        <Filter updateCharacters={updateCharacters}/>
        <PagesSwitch
          pages={pages}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
        <Cards error={error} isLoaded={isLoaded} items={items}></Cards>
        <PagesSwitch
          pages={pages}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
      </Content>
    </Wrapper>
  );
}

export default App;
