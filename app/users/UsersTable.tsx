"use client";
import React from "react";
import { useState, useEffect } from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [sortDesc, setSortDesc] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const fetchedUsers: User[] = await res.json();
      const sortFetchedUsers = sort(fetchedUsers).asc((user) => user.name);

      setUsers(sortFetchedUsers);
    };

    fetchUsers();
  }, []);

  const sortUsersHandler = () => {
    if (sortAsc) {
      const sortUsers = sort(users).desc((user) => user.name);
      setUsers(sortUsers);
      setSortAsc(false);
      setSortDesc(true);
    } else if (sortDesc) {
      const sortUsers = sort(users).asc((user) => user.name);
      setUsers(sortUsers);
      setSortAsc(true);
      setSortDesc(false);
    }
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th onClick={sortUsersHandler}>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
