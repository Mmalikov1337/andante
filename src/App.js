import React from 'react';
import {Header, Catalog, AboutProduct, Delivery, AboutUs} from './components';

import './App.scss';

function App() {
  return (
    <main className="App">
      <Header/>
      <Catalog/>
      <AboutProduct/>
      <Delivery/>
      <AboutUs/>
    </main>
  );
}

export default App;
