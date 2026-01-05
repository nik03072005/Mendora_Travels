import { useNavigate } from "react-router-dom";
import PNavbar from "../Components/PackageNavbar";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <PNavbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center px-4 text-center pt-16">
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
          alt="Lost traveler"
          className="w-32 h-32 sm:w-40 sm:h-40 mb-6 animate-bounce"
        />

        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-2">404</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Oops! You're off the map.
        </h2>
        <p className="text-gray-600 max-w-md mb-6 text-sm sm:text-base">
          The page you're looking for might have taken a different route. Let's get you back on track!
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2"
        >
          <span>🧭</span>
          <span>Go Back Home</span>
        </button>
      </div>
    </>
  );
};

export default NotFoundPage;
