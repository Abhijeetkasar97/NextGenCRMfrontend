import { useState, useEffect } from 'react';
import api from '../services/api';

export const useFetch = (endpoint, options = {}, deps = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint, options);
      setData(response.data);
    } catch (err) {
      setError(err.response?.data || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, deps); // Run whenever dependencies change

  return { data, loading, error, refetch: fetchData };
};
