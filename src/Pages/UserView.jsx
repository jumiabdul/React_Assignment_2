
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const UserView = ({ }) => {
    const [user, setUsers] = useState(null);
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    if (!user) return <p className="text-center text-gray-500">No user data available</p>;

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold text-indigo-600 mb-4">
                User Details
            </h1>

            <div className="space-y-2 text-gray-700">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>City:</strong> {user.address.city}</p>
                <p><strong>Street:</strong> {user.address.street}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
            </div>

            <button onClick={() => navigate("/users")} className="inline-block mt-6 text-indigo-600 font-medium hover:underline">
                ← Go Back to Users List
            </button>
        </div>
    );
};

export default UserView;
