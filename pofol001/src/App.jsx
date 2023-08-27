import './App.css';
import { Main } from './views/pages/Main';
import { CarPage } from './views/pages/Car';
import { DashBoard } from './views/pages/DashBoard';
import { Elements } from './views/pages/Elements';
import { Netflix } from './views/pages/Netflix';
import { Weather } from './views/pages/Weather';
import { Webgame } from './views/pages/WebGame';
import { NotFound } from './views/pages/NotFound';
import React from 'react';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (

    <div className='App'>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="carpage" element={<CarPage />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="elements" element={<Elements />} />
        <Route path="netflix" element={<Netflix />} />
        <Route path="weather" element={<Weather />} />
        <Route path="webgame" element={<Webgame />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
