import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import LogIn from "./pages/Login/LogIn";
import PrivateRoute from "./PrivateRoute";
import HomePage from './pages/HomePage'
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/landing" element={<Landing />} />
        <Route
          path="/tvshows"
          element={
            <PrivateRoute>
              <TvShows />
            </PrivateRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

