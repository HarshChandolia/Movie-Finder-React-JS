import { createContext, useState } from 'react';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertClassNm, setAlertClassNm] = useState('');

  const api_key = process.env.REACT_APP_API_KEY;

  const fetchMovie = async (title) => {
    setLoading(true);
    setShowResults(false);

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${api_key}&t=${title}`
    );
    const resData = await res.json();
    setData(resData);

    if (resData.Response === 'False') {
      setTimeout(() => {
        setLoading(false);
        setShowAlert(true);
        setAlertMsg('Movie not found, please try again');
        setAlertClassNm('alert alert-danger');
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
        setShowAlert(true);
        setAlertMsg('Movie found! See results below');
        setAlertClassNm('alert alert-success');
        setShowResults(true);
      }, 2000);
    }
  };

  setTimeout(() => {
    if (showAlert && !loading) {
      setShowAlert(false);
    }
  }, 2000);

  return (
    <MovieContext.Provider
      value={{
        fetchMovie,
        data,
        loading,
        showAlert,
        alertMsg,
        alertClassNm,
        showResults,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
