import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signout = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Successfully signed out!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    navigate('/adminlogin');
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Out</h2>
      <p className="mb-4">Are you sure you want to sign out?</p>
      <button
        onClick={handleSignout}
        className="w-full cursor-pointer bg-red-500 text-white p-2 rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Signout;