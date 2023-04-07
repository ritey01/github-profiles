import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../assets/SearchIcon.svg";
import theme from "../themes/theme";

const StyledForm = styled.form`
  width: 95%;
  padding: 0.4rem;
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 0.5rem;
  margin: 1rem auto;
  max-width: 573px;
  @media (min-width: 1440px) {
    max-width: 730px;
  }
`;

const StyledImg = styled.img`
  max-height: 0.9rem;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  font-family: "Space Mono", monospace;
  font-size: 0.6rem;
  margin-left: 0.2rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
`;

const StyledButton = styled.button`
  background-color: ${() => theme.LMColors.lightBlue};
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  float: right;
  color: ${(props) => props.color};
  font-family: "Space Mono", monospace;
  font-size: 0.9rem;
  font-weight: 600;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.text};
`;
const Search = ({ setSearchField, SearchField }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(name);
  };
  return (
    <StyledForm>
      <StyledDiv>
        <StyledImg src={SearchIcon} alt="Magnifying glass" />
        <StyledInput
          type="text"
          name="userSearch"
          id="form-input"
          placeholder="Search GitHub username..."
          onChange={handleNameChange}
        />
        <StyledButton onClick={handleChange} color="#FFFFFF">
          Search
        </StyledButton>
      </StyledDiv>
    </StyledForm>
  );
};

export default Search;
