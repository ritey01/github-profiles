import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <p>{user.login}</p>
      <p>{user.followers}</p>
      <p>{user.following}</p>
      <p>{user.public_repos}</p>
      <p>{user.created_at}</p>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt="" />
      <p>{user.location}</p>
      <p>{user.blog}</p>
      <p>{user.twitter_username}</p>
      <p>{user.company}</p>
    </div>
  );
};

export default User;
