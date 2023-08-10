import React from 'react';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import DisplayKp from './components/DisplayKp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="bg-[url('./assets/main-background.jpg')] bg-cover min-h-screen absolute w-full h-full blur-[5px]"></div>
      <div className="flex flex-col min-h-screen bg-text relative">
        <div className="flex-grow">
          <Header />
          <SearchForm />
          <DisplayKp />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
