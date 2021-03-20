import { useEffect, useState } from 'react';

export interface IUseFetch<T> {
  error: string | null;
  response: T | null;
}

const useFetch = <T>(url: string, options?: RequestInit): IUseFetch<T> => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { response, error };
};

export default useFetch;
