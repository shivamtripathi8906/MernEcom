import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
function Home() {
  return (
    <div>Home
      <Link to="/login">Login</Link>
      <Services/>
    </div>
    
  )
}

export default Home