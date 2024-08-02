import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
  <div className="App">
  <h1 className="head">Memory Game</h1>
  <div className="buttons">
    <Link to="/Easy"> <button >EASY</button> </Link>
    <Link to="/Medium"><button>MEDIUM</button></Link>
    <Link to="/Hard"><button>HARD</button></Link>
  </div>
  </div>
  );
};

export default Home;
