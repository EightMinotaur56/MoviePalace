import React from 'react';

const MovieScreen = ({ movie }) => {
  // Debugging: Log the value of the movie prop
  console.log('Movie:', movie);

  
  if (!movie) {
    return <div>Loading...</div>; 
  }

 
  const { title, overview, release_date, poster_path } = movie;

  return (
    <div className="movie-screen">
     
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title} Poster`}
          className="movie-poster"
        />
      )}
     
      <h2 className="movie-title">{title}</h2>
    
      <p><strong>Release Date:</strong> {release_date}</p>
     
      <p className="movie-overview">{overview}</p>
    </div>
  );
};

export default MovieScreen;
