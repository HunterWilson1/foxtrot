import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  // Add more image URLs
];

const Gallery = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="w-full h-64 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${image})` }}
          whileHover={{ scale: 1.1 }}
        />
      ))}
    </div>
  );
};

export default Gallery;
