import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import LogIn from "./pages/Login/LogIn";
import PrivateRoute from "./PrivateRoute";
import HomePage from './pages/HomePage/HomePage'
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Details from "./pages/Details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Landing />} />
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
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

<Route
          path="/details/:type/:id"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

