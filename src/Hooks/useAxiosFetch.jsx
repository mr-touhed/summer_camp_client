import { useEffect, useState } from 'react';
import axios from 'axios';
import useUser from './useUser';

const useAxiosFetcher = (url) => {
  const [data, setData] = useState([]);
  const [axiosLoading, setaxiosLoading] = useState(true);
    const {loading} = useUser()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');

        const instance = axios.create({
          baseURL: 'http://localhost:5000',
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        instance.interceptors.response.use(
          response => response,
          error => {
            if (error.response && (error.response.status === 404 || error.response.status === 402)) {
              return Promise.resolve({ data: [] });
            }
            return Promise.reject(error);
          }
        );

        const response = await instance.get(url);
        setData(response.data);
        setaxiosLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setaxiosLoading(false);
      }
    };

    
    if(!loading){
        fetchData();
    }
  }, [url,loading]);

  return { data, axiosLoading };
};

export default useAxiosFetcher;