/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import UserCard from "../components/userCard";
import axios from "axios";

export const UserDisplay = () => {
  const [users, setusers] = useState([]);
  const [error, setError] = useState("");

  const getUserFromApi = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setusers(res.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  return (
    <div id="container">
      <h2 className="title">User Information</h2>

      {error && <p>{error}</p>}

      <div className="grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

    </div>
  );
};