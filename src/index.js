import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header/Index";
import Layot from "./components/Layot/Index";
import Footer from "./components/Footer/Index";


const AppList = () => {
  const items = ['it1', 'it2']
  return (
    <ul>
      {
        items.map(item=> <li>{item}</li>)
      }
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <Layot />
      <Footer />      
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));