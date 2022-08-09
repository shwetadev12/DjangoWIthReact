import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Add from './Add'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
