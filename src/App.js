import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeaturesPage from './pages/FeaturesPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import TeamPage from './pages/TeamPage';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/features" element={<FeaturesPage/>}/>
          <Route path="/team" element={<TeamPage/>}/>
          <Route path="/signin" element={<SignInPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App