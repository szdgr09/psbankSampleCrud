import React, { useEffect} from 'react';
import './App.css';
import { mockData } from './data/data'
import {Crud} from './Crud/Crud'

function App() {

  useEffect(() => {
    sessionStorage.setItem('mockData', JSON.stringify(mockData))
  }, [])

  return (
    <div className="App">
      <Crud />
    </div>
  );
}

export default App;
