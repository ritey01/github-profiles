import React, { useState, useEffect } from "react";
import User from "./User";

const UserPage = () => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
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
      setUser(userData);
      setIsLoading(false);
    };
    fetchUser();
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
      <User user={user} />
    </>
  );
};

export default UserPage;
