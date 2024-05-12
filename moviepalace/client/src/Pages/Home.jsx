import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Movies from '../Components/Movies';
import './Home.css';
import Banner from '../Components/Banner';
import ProfileDropdown from '../Components/profile';
import MovieScreen from './MovieScreen';

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [nowShowingMovies, setNowShowingMovies] = useState([]);
  const [newlyReleasedMovies, setNewlyReleasedMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [sadMovies, setSadMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleMovieClick = (movieId, movieInfo) => {
    setSelectedMovie(movieId);
    window.location.href = `/onClick/${movieId}`;
  };

  const getNowShowingMovies = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=f211287ee7b15b080bb278734cd356db';
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setNowShowingMovies(responseJson.results.slice(0, 8));
    }
  };

  const getNewlyReleasedMovies = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=f211287ee7b15b080bb278734cd356db';
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setNewlyReleasedMovies(responseJson.results.slice(0, 8));
    }
  };

  const getFamilyMovies = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=f211287ee7b15b080bb278734cd356db';
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setFamilyMovies(responseJson.results.slice(0, 8));
    }
  };

  const getSadMovies = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=f211287ee7b15b080bb278734cd356db';
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setSadMovies(responseJson.results.slice(0, 8));
    }
  };

  const getMoviesRequest = async (searchValue) => {
    if (searchValue.trim() === '') {
      getNowShowingMovies();
      return;
    }
  
    const url = `https://api.themoviedb.org/3/search/movie?api_key=f211287ee7b15b080bb278734cd356db&query=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
  
    if (responseJson.results) {
      setNowShowingMovies(responseJson.results.slice(0, 20));
    }
  };

  useEffect(() => {
    getNowShowingMovies();
    getNewlyReleasedMovies();
    getFamilyMovies();
    getSadMovies();
  }, []);

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='home'>
      <Banner />
      <Header
        searchValue={searchValue}
        onChange={handleSearchInputChange}
        profileDropdown={<ProfileDropdown />}
      />
      <div className='movies-cat'>
        <div className='now-showing'>
          <h3>Now Showing</h3>
          <Movies movies={nowShowingMovies} handleMovieClick={handleMovieClick} />
        </div>
        <div className='just-released'>
          <h3>Coming Soon...</h3>
          <Movies movies={newlyReleasedMovies} handleMovieClick={handleMovieClick} />
        </div>
        <div className='family-movies'>
          <h3>Family Movies</h3>
          <div>
          <Movies movies={familyMovies} handleMovieClick={handleMovieClick} />
          </div>
        </div>
        <div className='sad-movies'>
          <h3>Sad Movies</h3>
          <Movies movies={sadMovies} handleMovieClick={handleMovieClick} />
        </div>
      </div>
      <div className='footer-home'>
        <div className='footer'>
          <div className='container'>
            <div className='branding'>
              <i className='fa-brands fa-facebook-f'></i>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-youtube'></i>
            </div>
            <div className='info-texts'>
              <div className='left-info'>
                <ul>
                  <li>Now Showing</li>
                  <li>Coming Soon</li>
                  <li>Audio Description</li>
                  <li>Ticket Purchase Policy</li>
                </ul>
              </div>
              <div className='middle-info'>
                <ul>
                  <li>Help Center</li>
                  <li>Cookie Preference</li>
                  <li>Gift Card</li>
                </ul>
              </div>
              <div className='right-info'>
                <ul>
                  <li>Media Creator</li>
                  <li>Privacy</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
