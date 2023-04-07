import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";
import OrganisationIcon from "../assets/OrganisationIcon";
import LinkIcon from "../assets/LinkIcon";
import LocationIcon from "../assets/LocationIcon";
import TwitterIcon from "../assets/TwitterIcon";

const Social = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media (min-width: 1440px) {
    margin-left: 6rem;
  }
`;

const StyledDetails = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const Details = styled.p`
  margin: 0 0 0 1rem;
  font-size: 0.8rem;
  color: ${(props) => props.color || props.theme.text};
`;

const SocialMedia = ({ user }) => {
  return (
    <Social>
      <StyledDetails>
        <LocationIcon location={user.location} />
        {user.location !== null ? (
          <Details> {user.location}</Details>
        ) : (
          <Details color={theme.LMColors.grey}>No location available</Details>
        )}
      </StyledDetails>
      <StyledDetails>
        <LinkIcon blog={user.blog} />

        {user.blog !== "" ? (
          <Details> {user.blog}</Details>
        ) : (
          <Details color={theme.LMColors.grey}>No blog available</Details>
        )}
      </StyledDetails>

      <StyledDetails>
        <TwitterIcon twitter={user.twitter_username} />
        {user.twitter_username !== null ? (
          <Details> {user.twitter_username}</Details>
        ) : (
          <Details color={theme.LMColors.grey}>Not available</Details>
        )}
      </StyledDetails>
      <StyledDetails>
        <OrganisationIcon company={user.company} />
        {user.company !== null ? (
          <Details> {user.company}</Details>
        ) : (
          <Details color={theme.LMColors.grey}>Company not available</Details>
        )}
      </StyledDetails>
    </Social>
  );
};

export default SocialMedia;
