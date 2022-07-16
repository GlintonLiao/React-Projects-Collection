import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from '././components/MovieList'
import './App.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';


function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f0f55aba`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const AddFavoriteMovies = (movie) => {
    const newFavoritesList = [...favorites, movie]
    setFavorites(newFavoritesList);
  }

  const removeFavoriteMovie = (movie) => {
		const newFavouriteList = favorites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavorites(newFavouriteList);
	};

  return (
    <div className='container-fluid movie-app'>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row">
        <MovieList 
          movies={movies}
          handleFavoritesClick={AddFavoriteMovies}
          favoriteComponent={AddFavorites}
        />
      </div>

      <div className="row d-flex align-items-conter mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row">
      <MovieList
					movies={favorites}
					handleFavouritesClick={removeFavoriteMovie}
					favouriteComponent={RemoveFavorites}
				/>
      </div>
    </div>
  );
}

export default App;
