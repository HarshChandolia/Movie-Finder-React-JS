import { useState, useContext, Fragment } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const MovieSearch = () => {
  const { fetchMovie } = useContext(MovieContext);
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchMovie(title);
    setTitle('');
  };

  return (
    <Fragment>
      <div className='movie-search'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={title}
            placeholder='Movie title...'
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    </Fragment>
  );
};

export default MovieSearch;
