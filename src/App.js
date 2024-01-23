import styled from "styled-components";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import getCharacters from "./api/getCharacters";

const Wrapper = styled.main`
  max-width: 1280px;
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
  gap: 20px;
`;

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCharacters().then(
      (result) => {
        setIsLoaded(true);
        setItems(result.results);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  return (
    <Wrapper>
      <Title>Rick&Morty API App</Title>
      <Subtitle>Stepan Sukhachev for Elfsight</Subtitle>
      <Content>
        <Cards error={error} isLoaded={isLoaded} items={items}></Cards>
      </Content>
    </Wrapper>
  );
}

export default App;
