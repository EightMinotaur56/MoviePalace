import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieScreen = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/${movieId}?api_key=f211287ee7b15b080bb278734cd356db');
        if (!response.ok) {
          throw new Error('Failed to fetch movie details (HTTP status: ${response.status})');
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <div>
          <p>{movieDetails.title}</p>
          
          {/* Display other movie details as needed */}
        </div>
      )}
    </div>
  );
};

export default MovieScreen;