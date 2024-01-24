import defaultLink from "../api/defaultLink";
import styled from "styled-components";

const FilterContainer = styled.div`
  max-width: 620px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 10px;
`;

const Label = styled.label`
  text-align: center;
  width: 300px;
  font-weight: 500;
  font-size: 1.2rem;
`;

const TextField = styled.input`
  box-sizing: border-box;
  width: 300px;
  border-radius: 5px;
`;

const SelectField = styled.select`
  box-sizing: border-box;
  width: 300px;
  border-radius: 5px;
`;

const Option = styled.option``;

const Submit = styled.input`
  width: 620px;
  height: 40px;
  background-color: black;
  color: white;
  border: 2px black solid;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 660px) {
    width: 300px;
  }
`;

function Filter({ updateCharacters }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    updateCharacters(defaultLink + "?" + new URLSearchParams(formJson));
  }

  return (
    <FilterContainer>
      <Title>Filter</Title>
      <Form onSubmit={handleSubmit}>
        <FieldWrapper>
          <Label htmlFor="name">Name</Label>
          <TextField id="name" name="name"></TextField>
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="status">Status</Label>
          <SelectField id="status" name="status">
            <Option></Option>
            <Option>Alive</Option>
            <Option>Dead</Option>
            <Option>Unknown</Option>
          </SelectField>
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="species">Species</Label>
          <TextField id="species" name="species"></TextField>
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="type">Type</Label>
          <TextField id="type" name="type"></TextField>
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="gender">Gender</Label>
          <SelectField id="gender" name="gender">
            <Option></Option>
            <Option>Female</Option>
            <Option>Male</Option>
            <Option>Genderless</Option>
            <Option>Unknown</Option>
          </SelectField>
        </FieldWrapper>
        <Submit type="submit" value="Search" />
      </Form>
    </FilterContainer>
  );
}

export default Filter;
