import React from 'react';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import DisplayKp from './components/DisplayKp';

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="bg-[url('./assets/main-background.jpg')] bg-cover min-h-screen absolute w-full h-full blur-[5px]"></div>
      <div className="bg-text relative">
        <Header />
        <SearchForm />
        <DisplayKp />
      </div>
    </div>
  );
}

export default App;
