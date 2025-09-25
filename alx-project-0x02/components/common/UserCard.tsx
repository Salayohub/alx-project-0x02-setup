import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="border p-4 rounded shadow mb-4 bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="mt-2">Email: {email}</p>
      <p className="mt-2">Address: {address}</p>
    </div>
  );
};

export default UserCard;
