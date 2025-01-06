import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import PrivateRoute from "./PrivateRoute";
import MainContent from "./pages/components/MainContent";
import Header from "./pages/components/Header";
import Headerr from "./pages/components/Headerr";
import HeroSection from "./pages/components/HeroSection";
import CategoryRow from "./pages/components/CategoryRow";


const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Headerr />
      <HeroSection />
      <CategoryRow />
    </div>
  );
};

export default App;

  //   <Router>
  //     <Routes>
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/login" element={<LogIn />} />
  //       <Route path="/" element={<Landing />} />

  //       <Route
  //         path="/"
  //         element={
  //           <PrivateRoute>
  //             <MainContent />
  //           </PrivateRoute>
  //         }
  //       />
  //     </Routes>
  //   </Router>
  // 
  // 
  // );
// }

