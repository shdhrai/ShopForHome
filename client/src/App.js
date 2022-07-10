import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import Pages from './components/mainpages/Pages'
import Footer from './components/footers/Footer';
import ContactInfo from './components/footers/ContactInfo';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Pages />
          <ContactInfo/>
          <Footer/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
