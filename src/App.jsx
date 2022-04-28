import MovieGrid from './componentes/MoviesGrid'
import styles from './css/App.module.css'

function App(){
  return(
    <div>
      <header>
        <h1 className={styles.title}>Peliclas</h1>
      </header>
      <main>
        <MovieGrid />
      </main>
    </div>
  );
}

export default App;
