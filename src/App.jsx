import React from "react";
import LoginSection from "./components/LoginSection";
import CarouselSection from "./components/CarouselSection";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <CarouselSection />
      <LoginSection />
    </div>
  );
};

export default App;
