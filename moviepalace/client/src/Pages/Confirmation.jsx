import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Confirmation.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import witches from '../images/witches.png';

const Confirmation = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const [selectedTime, setSelectedTime] = useState("");
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f211287ee7b15b080bb278734cd356db`);
        if (!response.ok) {
          throw new Error(`Failed to fetch movie details (HTTP status: ${response.status})`);
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const navigate = useNavigate();

  const handleClickPayment = () => {
    // Navigate to the payment page when the button is clicked
    navigate('/payment');
  };


  const generateRandomSeat = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    const randomLetterIndex = Math.floor(Math.random() * letters.length); // Generate a random index for selecting a letter
    const randomLetter = letters[randomLetterIndex]; // Select a random letter from the letters array
    return `${randomNumber}${randomLetter}`; // Combine the random number and letter
  };

  const randomSeat = generateRandomSeat();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const timeParam = urlParams.get('time');
    if (timeParam) {
      setSelectedTime(timeParam);
    }

   
  }, []);


  return (
    <div className='confirmation'>
      <Header />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
        integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />
      <script
        src='https://kit.fontawesome.com/2d95ff6af1.js'
        crossOrigin='anonymous'
      ></script>
      <div className="cover"></div>
      <div className="info">
        <div className="title">
          {movieDetails && (
            <div>
              <h2>{movieDetails.title}</h2>
            </div>
          )}
          <i className="fa-regular fa-clock"></i>
          <span>1HR 45MIN</span>
        </div>
        <div className="des">
          {movieDetails && (
            <div>
              <h2>{movieDetails.overview}</h2>
            </div>
          )}
        </div>
      </div>
    
      <div className="progress-bar">
        <div className="left">
          <span>1</span>
          <p>Select Movie</p>
        </div>
        <div className="mid">
          <span>2</span>
          <p>Confirmation</p>
        </div>
        <div className="right">
          <span>3</span>
          <p>Reserve / Buy</p>
        </div>
      </div>
      <div className="movie-info">
        <div className="movie-cover">
          {movieDetails && (
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
          )}
        </div>
        <div className="movie-info-title">
          {movieDetails && (
            <div>
              <h2>{movieDetails.title}</h2>
            </div>
          )}
          <div className="genre">
            <i className="fa-solid fa-film"></i>
            <span>Fantasy / Sci-fi</span>
          </div>
          <span>IMAX 2D</span>
          <div className="time-seat">
            <div className="time">
            <span>{selectedTime}</span>
            </div>
            <div className="seat">
              <span>{randomSeat}</span>
            </div>
          </div>
        </div>
        <div className="continue">
        <button onClick={handleClickPayment}>Proceed to checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Confirmation;
