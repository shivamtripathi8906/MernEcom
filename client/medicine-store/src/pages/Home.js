import React from 'react';
// import { Link } from 'react-router-dom';
import Services from '../components/Services';
import LabImg from '../components/LabImg';
// import Product from '../components/Product';
import Featured from '../components/Featured';
function Home() {
  return (
    <div>
      {/* <Link to="/login">Login</Link> */}
      <Services/>
      <LabImg/>
      <Featured/>
    </div>
    
  )
}

export default Home