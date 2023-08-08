import React, { useState } from 'react';
import './Artists.css';
import artistsData from './ArtistsData';
import Card from '../../components/Card/Card';
import CardExpanded from '../../components/Card/CardExpanded';

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
          <div className="card" key={artist.name} onClick={() => handleClick(artist)}>
            <Card
              name={artist.name}
              title={artist.title}
              bio={artist.bio}
            />
          </div>
        ))}
      </div>

      {selectedArtist && (
        <CardExpanded
          onClose={handleClose}
          name={selectedArtist.name}
          title={selectedArtist.title}
          longBio={selectedArtist.longBio}
        />
      )}
    </div>
  );
};

export default Artists;
