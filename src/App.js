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
  BackCall,
  Footer,
  Reji
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
      <Footer/>
      <Reji/>
    </main>
  );
}

export default App;
