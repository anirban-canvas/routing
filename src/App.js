import logo from './logo.svg';
import './App.css';
import { Parent } from './Parent';
import { DataContext } from './DataContext';
import { useEffect } from 'react';
import {BrowserRouter,createBrowserRouter} from 'react-router-dom'
import { Login } from './Component/Login';

function App() {



  return (
    <div className="App">
      
      <Parent/>
  

    </div>
  );
}

export default App;
