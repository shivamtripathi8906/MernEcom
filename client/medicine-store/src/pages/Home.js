import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import LabImg from '../components/LabImg';
function Home() {
  return (
    <div>Home
      <Link to="/login">Login</Link>
      <Services/>
      <LabImg/>
    </div>
    
  )
}

export default Home