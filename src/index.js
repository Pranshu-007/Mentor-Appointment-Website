import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './style.css';
import Home from './views/home';
import MentorList from './pages/MentorList';
import MentorDetails from './pages/MentorDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentorlist" element={<MentorList />} />
        <Route path="/mentor/:name" element={<MentorDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
