import React, { useState, useEffect } from "react";
import User from "./User";

const UserPage = () => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  const searchField = "ritey01";

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://api.github.com/users/${searchField}`
      );

      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }
      const userData = await response.json();
      console.log(userData);
      setUser(userData);
      setIsLoading(false);
    };
    const fetchRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/${searchField}/repos`
      );
      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }
      const reposData = await response.json();
      console.log(reposData);
      setRepos(reposData);
      setIsLoading(false);
    };

    fetchUser();
    fetchRepos();
  }, []);

  if (isNotFound) {
    return (
      <>
        <p className="error">Sorry! not found.</p>
      </>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <User user={user} repos={repos} />
    </>
  );
};

export default UserPage;
