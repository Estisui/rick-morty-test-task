import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-sizing: border-box;
  width: 300px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
`;

const Cross = styled.span`
  &:before {
    position: absolute;
    display: inline-block;
    right: 10px;
    top: 10px;
    font-size: 50px;
    line-height: 50%;
    content: "\\d7";
    cursor: pointer;
  }
`;

const ModalPicture = styled.img`
  width: 100%;
  height: 296px;
`;

const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;

const ModalTitle = styled.h3`
  font-size: 2rem;
  height: 76px;
  overflow: hidden;
  margin: 0;
`;

const ModalStat = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

function Modal({ modalInfo, onClose }) {
  return (
    <>
      <Overlay onClick={onClose}></Overlay>
      <ModalContainer>
        <Cross onClick={onClose}/>
        <ModalPicture
          src={modalInfo.image}
          alt={modalInfo.title}
        ></ModalPicture>
        <ModalText>
          <ModalTitle>{modalInfo.name}</ModalTitle>
          <ModalStat>Status: {modalInfo.status}</ModalStat>
          <ModalStat>Species: {modalInfo.species}</ModalStat>
          <ModalStat>Type: {modalInfo.type}</ModalStat>
          <ModalStat>Gender: {modalInfo.gender}</ModalStat>
        </ModalText>
      </ModalContainer>
    </>
  );
}

export default Modal;
