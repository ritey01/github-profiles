import React, { useState, useEffect } from "react";
import User from "./User";
import Search from "./Search";
import Swal from "sweetalert2";

const UserPage = () => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://api.github.com/users/${searchField}`
      );

      if (response.status === 404) {
        setIsNotFound(true);
        return;
      }

      if (response.ok === false) {
        setError(true);
        return;
      }

      const userData = await response.json();

      setUser(userData || {});
    };

    const fetchRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/${searchField}/repos`
      );

      if (response.status === 404) {
        setIsNotFound(true);
        return;
      }

      if (response.ok === false) {
        setError(true);
        if (response.status === 403) {
          console.error("Rate limit exceeded try again later");
        }
        return;
      }
      const reposData = await response.json();

      setRepos(reposData || []);
    };

    if (searchField !== "") {
      fetchUser();
      fetchRepos();
    }
  }, [searchField]);

  if (isNotFound) {
    Swal.fire({
      text: "User not found",
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "rgb(6, 214, 160)",
      confirmButtonAriaLabel: "Ok",
    });
    return (
      <>
        <Search setSearchField={setSearchField} />
      </>
    );
  }

  if (error) {
    Swal.fire({
      text: "Something went wrong",
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "rgb(6, 214, 160)",
      confirmButtonAriaLabel: "Ok",
    });
    return (
      <>
        <Search setSearchField={setSearchField} />
      </>
    );
  }

  return (
    <>
      <Search setSearchField={setSearchField} />
      {user.length === 0 ? null : <User user={user} repos={repos} />}
    </>
  );
};

export default UserPage;
