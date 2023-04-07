import styled from "styled-components";
import UserDetails from "./UserDetails";
import FollowersCard from "./FollowersCard";
import SocialMedia from "./SocialMedia";
import RepoList from "./RepoList";

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

const User = ({ user, repos }) => {
  return (
    <Card>
      <UserDetails user={user} />
      <FollowersCard user={user} />
      <SocialMedia user={user} />
      <RepoList repos={repos} />
    </Card>
  );
};

export default User;
