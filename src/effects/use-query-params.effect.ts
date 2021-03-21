import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const getQuery = () => new URLSearchParams(window.location.search);

const getQueryStringVal = (key: string): string | null => getQuery().get(key);

const useQueryParams = (
  key: string,
  defaultVal: string
): [string, (val: string) => void] => {
  const history = useHistory();
  const [query, setQuery] = useState(getQueryStringVal(key) || defaultVal);

  const updateUrl = (newVal: string) => {
    setQuery(newVal);

    const query = getQuery();

    if (newVal.trim() !== '') {
      query.set(key, newVal);
    } else {
      query.delete(key);
    }

    history.push(`?${query.toString()}`);
  };

  return [query, updateUrl];
};
export default useQueryParams;
