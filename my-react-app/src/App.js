import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer';
import Square from './Square';
import Board from './Board';

function App() {
  return (
    <div className="">
      <Header/>
      {/* <div>
        <Square className="gray " textContent="Hello" index="1"/>
        <Square className="blue " textContent="World" index="2"/>
        <Square textContent="This is "/>
      </div>
      <hr/> */}
      <Board />
      <Footer/>
    </div>
  );
}

export default App;