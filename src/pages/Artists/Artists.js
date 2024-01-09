import React, { useState } from 'react';
import './Artists.css';
import artistsData from './ArtistsData';
import CardExpanded from '../../components/CardExpanded/CardExpanded';

const Artists = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleClick = (artist) => {
    setSelectedArtist(artist);
  };

  const handleClose = () => {
    setSelectedArtist(null);
  };

  return (
    <div className='artists'>
      <div className="head">
        <h2>OUR ARTISTS</h2>
        <p>Meet the Talented Artists of The Golden Pearl: Explore their Artistic Journeys and Discover their Impressive Portfolio.</p>
      </div>
      <div className="cards">
        {artistsData.map((artist) => (
          <div className="card" key={artist.shortname} onClick={()=> handleClick(artist)}>
            <div className="card-image"
            style={{
              backgroundImage: `url(../../portfolios/${artist.shortname}/profile.jpeg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: 'inherit',
              height: 'inherit',
              position: 'absolute',
            }}
            />

            <div className="card-text">
              <h2>{artist.name}</h2>
              <h3>{artist.title}</h3>
            </div>
          </div>//end card
        ))}
      </div>

      {selectedArtist && (
        <CardExpanded
          onClose={handleClose}
          name={selectedArtist.name}
          title={selectedArtist.title}
          bio={selectedArtist.bio}
        />
      )}
    </div>
  );
};

export default Artists;
