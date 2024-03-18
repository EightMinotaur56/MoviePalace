import React from 'react';
import './Movies.css';
import { motion } from "framer-motion";

const Movies = (props) => {
  return (
    <motion.div className="outer">
      <motion.div className='carousel'>
        {props.movies.map((movie, index) => (
          <motion.div className='item' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Movies;
 