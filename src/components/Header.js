import React from "react";
import styled from "styled-components";
import moonIcon from "../assets/icons8-moon-symbol-30.png";
import sunIcon from "../assets/icons8-sun-24.png";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.8rem auto 0 auto;
  max-width: 573px;
  width: 95%;
  @media (min-width: 1440px) {
    max-width: 730px;
  }
`;
const StyledH1 = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.title};
`;

const Mode = styled.button`
  color: ${(props) => props.theme.text};
  font-weight: 700;
  font-size: 0.6rem;
  margin-right: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  border: none;
  background-color: ${(props) => props.theme.background};
`;

const RightIcons = styled.div`
  display: flex;
  margin-right: 1rem;
  align-items: center;
`;

const Header = ({ setTheme, isDarkTheme }) => {
  const changeMode = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };
  return (
    <StyledHeader>
      <StyledH1>profileFinder</StyledH1>
      <RightIcons>
        {!isDarkTheme ? (
          <>
            <Mode onClick={changeMode}>Dark</Mode>
            <img src={moonIcon} alt="Moon for dark mode" />
          </>
        ) : (
          <>
            <Mode onClick={changeMode}>Light</Mode>
            <img src={sunIcon} alt="Sun for light mode" />
          </>
        )}
      </RightIcons>
    </StyledHeader>
  );
};

export default Header;
