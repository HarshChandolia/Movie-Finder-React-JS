import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';

const Alert = () => {
  const { showAlert, alertMsg, alertClassNm } = useContext(MovieContext);

  if (showAlert) {
    return <div className={alertClassNm}>{alertMsg}</div>;
  } else {
    return null;
  }
};

export default Alert;
