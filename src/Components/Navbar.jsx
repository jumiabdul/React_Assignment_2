import React from "react";
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-blue-600 px-6 py-3 mb-6 flex items-center justify-center gap-8 shadow-md">

            <div className="flex items-center gap-6 text-white text-2xl font-bold">
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/about")}>About</button>
                <button onClick={() => navigate("/users")}>Users</button>
            </div>

        </nav>
    );
};

export default Navbar;
