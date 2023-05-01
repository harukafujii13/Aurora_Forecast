import React from "react";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Aurora from "./components/Aurora";

function App() {
  return (
    <div className="bg-[url('./assets/main-background.jpg')] bg-cover min-h-screen">
      <Header />
      <SearchForm />
      <Aurora />
    </div>
  );
}

export default App;
