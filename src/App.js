import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';
import SearchIcon from '@material-ui/icons/Search';

const FEATURED_API =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=36447c7b2ef9127e8be63cfdcdbc59ca&page=1';
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=36447c7b2ef9127e8be63cfdcdbc59ca&query=';

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const defautSearch = () => {
		fetch(FEATURED_API)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results);
				setMovies(data.results);
			});
	};

	useEffect(() => {
		fetch(FEATURED_API)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results);
				setMovies(data.results);
			});
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			fetch(SEARCH_API + searchTerm)
				.then((res) => res.json())
				.then((data) => {
					console.log(data.results);
					setMovies(data.results);
				});
			setSearchTerm('');
		}
	};

	return (
		<div>
			<header className='app_header'>
				<img
					src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'
					onClick={defautSearch}
					alt='poster'
				/>
				<div style={{ alignItems: 'center', color: 'white', display: 'flex' }}>
					<SearchIcon />
					<form onSubmit={handleOnSubmit}>
						<input
							type='search'
							placeholder='Search Movies'
							className='app_search'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						></input>
					</form>
				</div>
			</header>
			<div className='app'>
				{movies.length > 0 &&
					movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
		</div>
	);
}

export default App;
