import styled from "styled-components";

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 480px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CardPicture = styled.img`
  width: 100%;
  height: 296px;
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

function Card({ cardInfo, setModal }) {
  return (
    <CardContainer
      onClick={() =>
        setModal({
          isShown: true,
          info: cardInfo,
        })
      }
    >
      <CardPicture
        src={cardInfo.image}
        alt={cardInfo.title}
        loading="lazy"
      ></CardPicture>
      <CardText>
        <CardTitle>{cardInfo.name}</CardTitle>
        <CardStat>Status: {cardInfo.status}</CardStat>
        <CardStat>Gender: {cardInfo.gender}</CardStat>
      </CardText>
    </CardContainer>
  );
}

export default Card;
