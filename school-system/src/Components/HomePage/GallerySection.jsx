import React from 'react';
import './Home.css';
import teacherpng from '/src/assets/ateacher.avif';

const GallerySection = () => {
  return (
    <div className="gallery-container">
      {/* Text Section */}
      <div className="gallery-text">
        <h1>Explore Our Bright Moments</h1>
        <p>
          At BrightOak Academy, every picture tells a story.  
          From classrooms to events, discover the energy, creativity,  
          and achievements of our amazing learners.
        </p>
        <button className="gallery-btn">View Full Gallery</button>
      </div>

      {/* Image Section */}
      <div className="gallery-image">
        <img src={teacherpng} alt="teacher in class" />
      </div>
    </div>
  );
};

export default GallerySection;
