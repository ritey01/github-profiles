import React from "react";
import styled from "styled-components";
import moonIcon from "../assets/icons8-moon-symbol-30.png";
import sunIcon from "../assets/icons8-sun-24.png";

const StyledH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.title};
`;

const Mode = styled.button`
  color: ${(props) => props.theme.text};
  font-weight: 700;
  font-size: 0.8rem;
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
  };
  return (
    <div>
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
    </div>
  );
};

export default Header;
