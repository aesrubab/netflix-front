import React from 'react';
import { useFormData } from './FormData';
import { signUp } from './API';
import NetFlixBG from "../../assets/NetFlixBG.jpg";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { Link } from 'react-router-dom'; 
const SignUpForm = () => {
  const { formData, setFormData, error, setError, success, setSuccess, handleChange } = useFormData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const data = await signUp(formData);
      setSuccess('Account created successfully!');
      setFormData({ username: '', email: '', password: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="relative text-white flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${NetFlixBG})`,
        backgroundColor: 'rgba(0, 0, 0, 1)', 
      }}
    >
      <div className="absolute inset-0 bg-black/90"></div>
      <nav className="w-full p-4 flex items-center relative z-10" style={{ marginBottom: '2rem' }}>
        <img
          src={NetflixLogo}
          alt="Netflix Logo"
          className="h-20 ml-4 shadow-lg mb-7"
          style={{ transform: 'translateY(30px)' }} 
        />
      </nav>
      <form
        onSubmit={handleSubmit}
        className="bg-black backdrop-blur-md p-10  w-96  flex flex-col space-y-6 shadow-2xl relative z-20"
        style={{ transform: 'translateY(-45px)' }}
      >
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="p-3 bg-gray-800 rounded text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
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
          Sign Up 
        </button>
        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <a href="login" className="text-blue-400 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
