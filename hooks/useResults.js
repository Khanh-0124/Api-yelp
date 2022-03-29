import {useState, useEffect} from 'react';
import yelp from '../api/yelp';
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async searchTerm => {
    try {
      const reponse = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'New York City',
        },
      });
      setResults(reponse.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi('pasta');
  }, []);
  return [searchApi, results, errorMessage];
};
