import styled from "styled-components";
import theme from "../themes/theme";
import { formatDate } from "../utils/dateFormat";

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
    </Card>
  );
};

export default User;
