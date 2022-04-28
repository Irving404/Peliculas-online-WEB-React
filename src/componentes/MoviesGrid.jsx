import MovieCard from './MovieCard';
import movies from '../json/Movies.json'
import styles from '../css/MoviesGrid.module.css'

function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map(function (movie) {
        return (
          <MovieCard key={movie.id} movie={movie}/>
        );
      })}
    </ul>
  );
}

export default MoviesGrid;

