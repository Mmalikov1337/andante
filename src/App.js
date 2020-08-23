import React from 'react';
import {
  Header,
  Catalog,
  AboutProduct,
  Delivery,
  AboutUs,
  Assortment,
  Recall,
  Questions,
  Academy,
  BackCall
} from './components';

import './App.scss';

function App() {
  return (
    <main className="App">
      <Header />
      <Catalog />
      <AboutProduct />
      <Delivery />
      <AboutUs />
      <Assortment />
      <Recall/>
      <Questions/>
      <Academy/>
      <BackCall/>
    </main>
  );
}

export default App;
