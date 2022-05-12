import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'The High Voltage',
      category: 'works',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Dine n Wine',
      category: 'works',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Food Festival',
      category: 'works',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Ja Morant',
      category: 'creative',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Trae Young',
      category: 'creative',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Jayson Tatum',
      category: 'creative',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Steve Nash',
      category: 'creative',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Resumé',
      category: 'documents',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Skills',
      category: 'documents',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'LinkedIn Profile',
      category: 'documents',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Github Repository',
      category: 'documents',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Contact Information',
      category: 'contact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(!isModalOpen);
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal} />)}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
          src={require(`../../assets/small/${category}/${i}.jpg`)}
          alt={image.name}
          className="img-thumbnail mx-1"
          onClick={() => toggleModal(image, i)}
          key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;