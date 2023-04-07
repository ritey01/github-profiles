import React, { useState, useEffect } from "react";
import User from "./User";
import Search from "./Search";

const UserPage = () => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [searchField, setSearchField] = useState("ritey01");

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

      setUser(userData);
      setIsLoading(false);
    };
    const fetchRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/${searchField}/repos`
      );
      if (response.ok === false) {
        setIsNotFound(true);
        if (response.status === 403) {
          console.error("Rate limit exceeded try again later");
        }
        return;
      }
      const reposData = await response.json();

      setRepos(reposData);
      setIsLoading(false);
    };

    fetchUser();
    fetchRepos();
  }, [searchField]);

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
      <Search setSearchField={setSearchField} />
      <User user={user} repos={repos} />
    </>
  );
};

export default UserPage;
