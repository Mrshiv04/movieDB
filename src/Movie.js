import React from 'react';
import './Movie.css';

const IMG_API = 'https://image.tmdb.org/t/p/w1280/';

const setVoteClass = (vote) => {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 6) {
		return 'orange';
	} else {
		return 'red';
	}
};

function Movie({
	title,
	poster_path,
	overview,
	vote_average,
	id,
	original_title,
}) {
	return (
		<div className='movie'>
			<img
				src={
					poster_path
						? IMG_API + poster_path
						: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg'
				}
				alt={title}
			/>
			<div className='movie_info'>
				<h3>{title}</h3>
				<span className={`tag ${setVoteClass(vote_average)}`}>
					{vote_average}
				</span>
			</div>
			<div className='movie_overview'>
				<h2 style={{ color: '#28BBD2' }}>Overview:</h2>
				<p style={{ color: 'gold' }}>{original_title}</p>
				<p>{overview}</p>
				<a href={'https://www.themoviedb.org/movie/' + id}>
					Click here for more details
				</a>
			</div>
		</div>
	);
}

export default Movie;
