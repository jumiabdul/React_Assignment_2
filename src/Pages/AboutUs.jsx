import { useNavigate } from "react-router-dom"

const AboutUs = () => {
    const navigate = useNavigate();
    return (

        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
            <h1 className="text-3xl font-bold text-indigo-600 mb-4">
                About This Application
            </h1>

            <p className="text-gray-700 leading-relaxed text-lg">
                This React Router Demo App is designed to help beginners understand how navigation works
                inside a React application. It showcases essential routing concepts in a clean and simple
                manner, making it easier for new developers to get hands-on experience with multi-page
                React projects.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                Purpose of the App
            </h2>
            <p className="text-gray-600 leading-relaxed">
                The main purpose of this app is to demonstrate how to:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Set up and configure <strong>React Router</strong></li>
                <li>Navigate smoothly between multiple pages (Home, About, User)</li>
                <li>Use <strong>dynamic / parameterized routes</strong> such as <code>/user/:id</code></li>
                <li>Organize the UI into small, reusable components</li>
                <li>Create a clean and user-friendly navigation system</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                📘 What You’ll Learn
            </h2>
            <p className="text-gray-600 leading-relaxed">
                By exploring this application, you’ll get practical knowledge of how routing works in real
                React projects. You'll learn how to link pages, pass URL parameters, and build structured
                layouts for scalable applications.
            </p>

            <p className="mt-6 text-indigo-500 font-medium">
                This project acts as a foundation for building larger, more advanced React applications with
                complex routing systems.
            </p>

            <button onClick={() => navigate("/")} className="inline-block text-center mt-6 text-indigo-600 font-medium hover:underline">
                ← Go Back to Home
            </button>
        </div>
    )
}

export default AboutUs;
