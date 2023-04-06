import styled from "styled-components";
import theme from "../themes/theme";
import { formatDate } from "../utils/dateFormat";
import LinkIcon from "../assets/LinkIcon";
import LocationIcon from "../assets/LocationIcon";
import TwitterIcon from "../assets/TwitterIcon";
import CompanyIcon from "../assets/CompanyIcon";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  width: 95%;
  margin: 0 auto;
  padding: 1rem 1rem 2rem 1rem;
  border-radius: 0.5rem;
  max-width: 573px;
  @media (min-width: 1440px) {
    max-width: 730px;
  }
`;
const StyledUserHeader = styled.div`
  display: grid;
  grid-template-columns: 4rem auto;
  margin-top: 0.9rem;
  @media (min-width: 1440px) {
    grid-template-columns: 15% auto;
  }
`;

const UserDetails = styled.div`
  margin-left: 1rem;
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

const Avatar = styled.img`
  width: 10vh;
  border-radius: 50%;
  @media (min-width: 1440px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

const UserName = styled.h2`
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.theme.title};
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Login = styled.p`
  font-size: 0.9rem;
  color: ${() => theme.LMColors.lightBlue};
  margin: 0;
  @media (min-width: 1440px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.text};
  margin: 0;
  @media (min-width: 1440px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    margin-top: 0.3rem;
  }
`;

const Bio = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 0.9rem;
  margin: 1.5rem auto 0 auto;
  @media (min-width: 1440px) {
    margin-left: 6rem;
  }
`;
const FollowersCard = styled.div`
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
const SocialMedia = styled.div`
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
  font-size: 0.9rem;
  color: ${(props) => props.color || props.theme.text};
`;

const User = ({ user }) => {
  return (
    <Card>
      <StyledUserHeader>
        <Avatar src={user.avatar_url} alt="GitHub user avatar" />

        <UserDetails>
          {user.name === null ? (
            <UserName>{user.login}</UserName>
          ) : (
            <UserName>{user.name}</UserName>
          )}
          <Login>@{user.login}</Login>
          <Date>Joined {formatDate(user.created_at)}</Date>
        </UserDetails>
      </StyledUserHeader>

      <div>
        {user.bio !== null ? (
          <Bio> {user.bio}</Bio>
        ) : (
          <Bio>User has no bio</Bio>
        )}
      </div>
      <FollowersCard>
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
      </FollowersCard>
      <SocialMedia>
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
          <CompanyIcon company={user.company} />
          {user.company !== null ? (
            <Details> {user.company}</Details>
          ) : (
            <Details color={theme.LMColors.grey}>Company not available</Details>
          )}
        </StyledDetails>
      </SocialMedia>
    </Card>
  );
};

export default User;
