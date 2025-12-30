
import { useNavigate } from "react-router-dom"; // or use your router
import PNavbar from "../Components/PackageNavbar";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <PNavbar/>
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center px-4 text-center mt-10">
      <img
        src="https://cdn-icons-png.flaticon.com/512/201/201623.png" // Replace with a travel-themed SVG or image
        alt="Lost traveler"
        className="w-40 h-40 mb-6 animate-bounce"
      />

      <h1 className="text-6xl font-extrabold text-orange-500 mb-2">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
        Oops! You're off the map.
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        The page you’re looking for might have taken a different route. Let’s get you back on track!
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition"
      >
        🧭 Go Back Home
      </button>
    </div>
    </>
  );
};

export default NotFoundPage;
