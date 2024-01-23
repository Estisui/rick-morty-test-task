import styled from 'styled-components';

const PagesSwitchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px
`;

const PageButton = styled.button`
  width: 300px;
  background-color: transparent;
  border: 2px black solid;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;
`;

function PagesSwitch({ pages, onPrevClick, onNextClick }) {
  return (
    <PagesSwitchContainer>
      <PageButton disabled={!pages.prev} onClick={onPrevClick}>Previous page</PageButton>
      <PageButton disabled={!pages.next} onClick={onNextClick}>Next page</PageButton>
    </PagesSwitchContainer>
  )
}

export default PagesSwitch;
