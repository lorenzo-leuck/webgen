
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-10">Welcome to the Pet Shop</h1>
      <Link to="/pets" className="text-blue-500 underline">View Our Pets</Link>
    </div>
  );
};

export default Home;
