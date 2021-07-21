import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const SearchResults = () => {
  const { data, showResults } = useContext(MovieContext);
  const { Title, Year, Actors, Genre, Plot, Ratings } = data;

  let ratingsOutput = [];

  if (Ratings) {
    Ratings.map((rating) => {
      ratingsOutput += `${rating.Source}: ${rating.Value}
`;
    });
  }

  if (showResults) {
    return (
      <div className='search-results'>
        <h3>Movie Search Results</h3>
        <div className='search-results-item'>
          <label>Title</label>
          <input type='text' value={Title} disabled />
        </div>
        <div className='search-results-item'>
          <label>Year</label>
          <input type='text' value={Year} disabled />
        </div>
        <div className='search-results-item'>
          <label>Actors</label>
          <input type='text' value={Actors} disabled />
        </div>
        <div className='search-results-item'>
          <label>Genre</label>
          <input type='text' value={Genre} disabled />
        </div>
        <div className='search-results-item'>
          <label>Plot</label>
          <input type='text' value={Plot} disabled />
        </div>
        <div className='search-results-item'>
          <label>Ratings</label>
          <textarea value={ratingsOutput} disabled />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SearchResults;
