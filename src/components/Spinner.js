import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import spinner from '../images/spinner.gif';

const Spinner = () => {
  const { loading } = useContext(MovieContext);

  if (loading) {
    return (
      <div className='spinner'>
        <img
          src={spinner}
          alt='loading'
          style={{ width: '200px', margin: 'auto', display: 'block' }}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Spinner;
