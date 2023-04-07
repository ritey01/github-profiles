import React from "react";
import styled from "styled-components";

const RepoTitle = styled.h3`
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.title};
`;

const Repo = styled.ul`
  list-style-type: none;
  margin-top: 0;
`;
const RepoCard = styled.li`
  color: ${(props) => props.theme.text};
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`;

const RepoList = ({ repos }) => {
  const top4Repos = repos.slice(0, 4);
  return (
    <>
      <RepoTitle>Top Repos</RepoTitle>
      <Repo>
        {top4Repos ? (
          top4Repos.map((repo) => <RepoCard>{repo.name}</RepoCard>)
        ) : (
          <p>No repos available</p>
        )}
      </Repo>
    </>
  );
};

export default RepoList;
