import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/interface">
        <button>Create</button>
      </Link>
    </div>
  );
};



export default Home;
