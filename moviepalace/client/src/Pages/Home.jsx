import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Movies from '../Components/Movies';
import './Home.css';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import ProfileDropdown from '../Components/profile'; // Correct import path


const Home = () => {
  const [nowShowingMovies, setNowShowingMovies] = useState([]);
  const [newlyReleasedMovies, setNewlyReleasedMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [sadMovies, setSadMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getNowShowingMovies = async () => {
    // Fetch now showing movies from the API
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=f211287ee7b15b080bb278734cd356db`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setNowShowingMovies(responseJson.results.slice(0, 8));
    }
  };

  const getNewlyReleasedMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=f211287ee7b15b080bb278734cd356db`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setNewlyReleasedMovies(responseJson.results.slice(0, 8));
    }
  };

  const getFamilyMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=f211287ee7b15b080bb278734cd356db`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setFamilyMovies(responseJson.results.slice(0, 8));
    }
  };

  const getSadMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=f211287ee7b15b080bb278734cd356db`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setSadMovies(responseJson.results.slice(0, 8));
    }
  };

  //If our search box is empty then load these default movies (when users delete typed text from search box)
  const getMoviesRequest = async (searchValue) => {
    if (searchValue.trim() === "") {
      getNowShowingMovies();
      getNewlyReleasedMovies();
      getFamilyMovies();
      getSadMovies();
      return;
    }
  
    const url = `https://api.themoviedb.org/3/search/movie?api_key=f211287ee7b15b080bb278734cd356db&query=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
  
    if (responseJson.results) {
      //Get movie list based on what user typed, up to 20 movies max
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
    setSearchValue(event);
  };

  return (
    <div className='home'>
      <Banner />
      <Header
        searchValue={searchValue}
        onChange={handleSearchInputChange}
        profileDropdown={<ProfileDropdown />} // Pass ProfileDropdown as a prop
      />
      <div className='movies-cat'>
        {searchValue.trim() === "" ? (
          <>
            <div className="now-showing">
              <h3>Now Showing</h3>
              <Movies movies={nowShowingMovies} />
            </div>
            <div className="just-released">
              <h3>Coming Soon...</h3>
              <Movies movies={newlyReleasedMovies} />
            </div>
            <div className="family-movies">
              <h3>Goofy Comedy Movies</h3>
              <Movies movies={familyMovies} />
            </div>
            <div className="sad-movies">
              <h3>Soul Breaking</h3>
              <Movies movies={sadMovies} />
            </div>
          </>
        ) : (
          <div className="searched-movies">
            <h3>Searched Movies</h3>
            <Movies movies={nowShowingMovies} />
          </div>
        )}
      </div>
      <div className="footer-home">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
