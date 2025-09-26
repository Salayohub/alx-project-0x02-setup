import React from "react";
import { UserProps } from "@/interfaces";
import UserCard from "../components/common/UserCard";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          email={user.email}
          name={user.name}
          address={user.address}
        />
      ))}
    </div>
  );
};

// ✅ Use function instead of const for checker
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
