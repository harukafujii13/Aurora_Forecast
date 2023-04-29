import React from "react";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="bg-[url('./assets/main-background.jpg')] bg-cover min-h-screen">
      <Header />
      <SearchForm />
    </div>
  );
}

export default App;
