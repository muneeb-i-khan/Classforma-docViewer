import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import Doc2 from "./Doc2"
import Doc1 from "./Doc1"
import Doc3 from './Doc3'



const App = () => {
 

  return (
    <div className="App">
       <h1>Documents</h1>
      <hr />
      <nav>
        <ul>
          <li><Link to="/Doc1">Document1</Link></li>
          <li><Link to="/Doc2">Document2</Link></li>
          <li><Link to="/Doc3">Document3</Link></li>
        </ul>
      </nav>
     

      <Routes>
        <Route path="/Doc1" element={<Doc1 />} />
        <Route path="/Doc2" element={<Doc2 />} />
        <Route path="/Doc3" element={<Doc3 />} />
      </Routes>

    </div>


  );
};

export default App;
