import React from 'react';
import './Home.css';
import logo from '../../assets/logo-removebg-preview.png';

const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="text">
          <h2>WELCOME TO STRANGE WORLD TATTOO</h2>
          <p>
            Join us in celebrating over 17 years of excellence!</p>
          <p>
            Strange World is one of the premiere tattoo shops in Calgary with an incredible line up of experienced and talented artists. Our artists are recognized at an international level, having won numerous awards at both conventions and tattoo festivals around the world!
          </p>
          <p>
            We additionally offer piercing services, our body piercer being professional, friendly, and formally educated on cross contamination, blood born pathogens and more.
          </p>
          <p>
            Most importantly, Strange World utilizes the highest standard of sterilization procedures possible.
          </p>
          <p>
            Come visit us to see why we are Calgary's choice for all your tattoo and piercing needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
