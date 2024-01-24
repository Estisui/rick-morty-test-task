import styled from "styled-components";

const PagesSwitchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const PageButton = styled.button`
  width: 300px;
  height: 40px;
  background-color: transparent;
  border: 2px black solid;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1.2rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  &:disabled {
    border-color: rgba(0, 0, 0, 0.4);
  }

  &:disabled:hover {
    background-color: transparent;
    cursor: default;
  }
`;

function PagesSwitch({ pages, onPrevClick, onNextClick }) {
  return (
    <PagesSwitchContainer>
      <PageButton disabled={!pages.prev} onClick={onPrevClick}>
        Previous page
      </PageButton>
      <PageButton disabled={!pages.next} onClick={onNextClick}>
        Next page
      </PageButton>
    </PagesSwitchContainer>
  );
}

export default PagesSwitch;
