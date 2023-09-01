import { Link } from "react-router-dom";
import Services from "../components/Services";
import LabImg from "../components/LabImg";
import Featured from "../components/Featured";

function Home() {
  return (
    <div>
      Home
      <Link to="/login">Login</Link>
      <Services />
      <LabImg />
      <Featured />
    </div>
  );
}

export default Home;
