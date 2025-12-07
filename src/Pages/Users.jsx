import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div className="bg-gray-100 p-6">
            <p className="text-3xl font-bold text-indigo-600 mb-4">Users List</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
                {users.map((user) => (
                    <div key={user.id} className="p-4 rounded-lg shadow-md bg-white border-l-4 border-indigo-500">
                        <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-gray-600">📧 {user.email}</p>
                        <p className="text-gray-600">📍 {user.address.city}</p>
                        <p className="text-gray-600">📞 {user.phone}</p>

                        <button className="inline-block mt-2 text-indigo-600 font-medium hover:underline" onClick={() => navigate(`/user/${user.id}`)}>
                            View Details →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
