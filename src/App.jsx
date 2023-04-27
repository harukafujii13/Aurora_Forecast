import React from "react";

import Header from "./components/Header";
import SerchForm from "./components/SerchForm";

function App() {
  return (
    <div className="bg-[url('./assets/main-background.jpg')] bg-cover min-h-screen">
      <Header />
      <SerchForm />
    </div>
  );
}

export default App;
