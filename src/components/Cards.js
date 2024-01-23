import Card from './Card';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

function Cards({ error, isLoaded, items }) {
  if (error) {
    return <p>Error: {error.message}</p>;
  } else if (!isLoaded) {
    return <p>Loading...</p>;
  } else {
    return (
      <CardsContainer>
        {items.map(item => (
          <Card key={item.id} cardInfo={item}/>
        ))}
      </CardsContainer>
    );
  }
}

export default Cards;
