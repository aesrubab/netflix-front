import React from 'react';
import { useFormData } from '../../components/FormData';
import { logIn } from '../../components/Api';
import { useNavigate } from 'react-router-dom'; 
import NetFlixBG from "../../../assets/NetFlixBG.jpg";
import NetflixLogo from "../../../assets/NetflixLogo.png";
import { Link } from 'react-router-dom';

const LogInForm = () => {
  const { formData, setFormData, error, setError, success, setSuccess, handleChange } = useFormData();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const data = await logIn(formData);

      localStorage.setItem('token', data.token);

      setSuccess('Logged in successfully!');
      setFormData({ email: '', password: '' });

      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className="relative text-white flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${NetFlixBG})`,
      }}
    >
      <div className="absolute inset-0 bg-black/90"></div>
      <nav className="w-full p-1 flex items-center relative ">
        <img
          src={NetflixLogo}
          alt="Netflix Logo"
          className="h-20 ml-6 mb-4 shadow-lg"
        />
      </nav>
      <form
        onSubmit={handleSubmit}
        className="bg-black/90 backdrop-blur-sm  p-10 w-96 flex flex-col space-y-6 shadow-2xl relative z-20"
      >
        <h2 className="text-3xl font-bold text-center">Log In</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-3 bg-gray-800 rounded text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="p-3 bg-gray-800 rounded text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white text-lg p-3 rounded font-semibold tracking-wide"
        >
          Log In
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogInForm;
