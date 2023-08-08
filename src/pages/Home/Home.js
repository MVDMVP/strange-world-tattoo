import React from 'react';
import './Home.css';
import logo2 from '../../assets/logo2.webp';

const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        <div>
          <img className="logo" src={logo2} alt="Logo" />
        </div>
        <div className="text">
          <h1>WELCOME TO THE GOLDEN PEARL</h1>
          <p>
            Located in the heart of Oakville, The Golden Pearl has been voted the Top Choice Tattoo Shop for four consecutive years! Our team loves hearing about your ideas - big or small. We believe that every tattoo should be as unique as the individual, which is why we will work with you to create a fully personalized tattoo design that you can be proud of. Our number one priority is to provide you with the best tattoo experience in a sterile and friendly environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
