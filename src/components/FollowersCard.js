import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  font-size: 1rem;
  justify-content: space-around;
  background-color: ${(props) => props.theme.background};
  margin-top: 1rem;
  @media (min-width: 1440px) {
    margin-left: 6rem;
  }
`;

const FollowersText = styled.span`
  font-size: 0.6rem;
  color: ${(props) => props.theme.text};
  font-weight: 400;
`;
const StyledInfo = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 1.2rem;
  color: ${(props) => props.theme.title};
`;

const FollowersCard = ({ user }) => {
  return (
    <Card>
      <StyledInfo>
        <FollowersText>Repos </FollowersText>
        {user.public_repos}
      </StyledInfo>
      <StyledInfo>
        <FollowersText>Followers</FollowersText> {user.followers}
      </StyledInfo>
      <StyledInfo>
        <FollowersText>Following</FollowersText> {user.following}
      </StyledInfo>
    </Card>
  );
};

export default FollowersCard;
