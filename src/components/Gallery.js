import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const media = [
  { type: 'video', url: 'https://vimeo.com/791487789' },
  { type: 'video', url: 'https://vimeo.com/902846672' },
  { type: 'image', url: 'https://via.placeholder.com/300x200' },
  // Add more media items
];

const fetchVimeoThumbnail = async (videoUrl) => {
  const videoId = videoUrl.split('/').pop();
  const response = await fetch(`https://vimeo.com/api/v2/video/${videoId}.json`);
  const data = await response.json();
  return data[0].thumbnail_large;
};

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState({});

  useEffect(() => {
    const fetchThumbnails = async () => {
      const thumbnails = await Promise.all(
        media.map(async (item) => {
          if (item.type === 'video') {
            const thumbnail = await fetchVimeoThumbnail(item.url);
            return { [item.url]: thumbnail };
          }
          return { [item.url]: item.url };
        })
      );
      setThumbnails(Object.assign({}, ...thumbnails));
    };

    fetchThumbnails();
  }, []);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <motion.div
            key={index}
            className="w-full h-64 bg-cover bg-center rounded-lg cursor-pointer"
            style={{ backgroundImage: `url(${thumbnails[item.url]})` }}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleVideoClick(item.url)}
          >
            {item.type === 'video' && (
              <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <button className="text-white text-lg">Play Video</button>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute top-0 right-0 m-4 text-white text-xl"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <iframe
              src={`https://player.vimeo.com/video/${selectedVideo.split('/').pop()}?h=82239af60c`}
              width="100%"
              height="500"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
