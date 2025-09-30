import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import "./App.css";

const LazyLoginSection = lazy(() => import("./components/LoginSection"));
const LazyCarouselSection = lazy(() => import("./components/CarouselSection"));
const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyCarouselSection />
        <LazyLoginSection />
      </Suspense>
    </div>
  );
};

export default App;
