import React from 'react';
import './App.css';
import Header from "./components/Header/Header.component";
import Category from "./components/Category/Category.component";

function App() {
  return (
    <div className="App">
      <Header/>
      <Category/>
      <Category/>
    </div>
  );
}

export default App;
