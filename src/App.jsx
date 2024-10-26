import React from 'react';
import Header from './components/Header';
import Memorial from './components/Memorial';
import Gallery from './components/Gallery';
import MessageBoard from './components/MessageBoard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Memorial />
        <Gallery />
        <MessageBoard />
      </main>
      <Footer />
    </div>
  );
}

export default App;