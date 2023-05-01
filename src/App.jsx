import React from "react";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DisplayKp from "./components/DisplayKp";

function App() {
  return (
    <div className="bg-[url('./assets/main-background.jpg')] bg-cover min-h-screen">
      <Header />
      <SearchForm />
      <DisplayKp />
    </div>
  );
}

export default App;
