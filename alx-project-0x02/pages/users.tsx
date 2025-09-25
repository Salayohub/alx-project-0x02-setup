import React, {useState, useEffect} from "react";
import  { UserProps } from "@/interfaces";
import UserCard from "../components/common/UserCard";


const Users: React.FC = () => {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data: UserProps[] = await res.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            {users.map((user) => (
                <UserCard key={user.id} 
                id= {user.id}
                 email= {user.email}
                 name= {user.name}
                 address= {user.address}
                />
            ))}
        </div>
    );
};

export default Users;
