import React from 'react';
import './Movies.css';
import { motion } from "framer-motion";

const Movies = (props) => {
  const { movies, handleMovieClick } = props;

  return (
    <motion.div className="outer">
      <motion.div className='carousel'>
        {movies.map((movie, index) => (
          <motion.div className='item' key={index} onClick={() => handleMovieClick(movie.id, movie)}>
            {movie && movie.poster_path && (
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Movies;
