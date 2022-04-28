import styles from '../css/MovieCard.module.css'

function MovieCard({ movie }) {
  const img_URL = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <img width={230} height={345} src={img_URL} alt={movie.title} className={styles.movieImage} />
      <div>
        {movie.title}
      </div>
    </li>
  );
}

export default MovieCard;