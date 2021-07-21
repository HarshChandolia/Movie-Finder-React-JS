import MovieSearch from './components/MovieSearch';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Spinner from './components/Spinner';
import SearchResults from './components/SearchResults';
import MovieContextProvider from './contexts/MovieContext';

function App() {
  return (
    <div className='App'>
      <MovieContextProvider>
        <Navbar />
        <MovieSearch />
        <Alert />
        <Spinner />
        <SearchResults />
      </MovieContextProvider>
    </div>
  );
}

export default App;
