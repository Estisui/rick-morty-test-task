import styled from "styled-components";

const CardContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  max-width: 300px;
  overflow: hidden;
`;

const CardPicture = styled.img`
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  height: 76px;
  overflow: hidden;
  margin: 0;
`;

const CardStat = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

function Card({ cardInfo }) {
  return (
    <CardContainer>
      <CardPicture src={cardInfo.image} alt={cardInfo.title}></CardPicture>
      <CardText>
        <CardTitle>{cardInfo.name}</CardTitle>
        <CardStat>Status: {cardInfo.status}</CardStat>
        <CardStat>Gender: {cardInfo.gender}</CardStat>
      </CardText>
    </CardContainer>
  );
}

export default Card;
