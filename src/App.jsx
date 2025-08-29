import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./page/Homepage/Homepage";
import Teampage from "./page/Team/Teampage";
import TechnologyPage from "./page/Technology/TechnologyPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
