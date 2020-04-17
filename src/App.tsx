import React, { FC, useState, useCallback, useMemo } from 'react';
import debounce from 'lodash/debounce';
import { ColorsList } from './components/ColorsList';
import './App.css';

const colorsFromServer = ['white', 'purple', 'pink', 'blue', 'brown', 'black'];

const getVisibleColors = (colors: string[], query: string) => {
  const pattern = new RegExp(query, 'i');
  console.log('filtering');
  return colors.filter((color) => pattern.test(color));
};

export const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);
  const [filteredQuery, setFilteredQuery] = useState<string>('');

  const setFilteredQueryWithDebounce = useCallback(
    debounce(setFilteredQuery, 1000),
    []
  );

  const hadnleChange = (event: any) => {
    setQuery(event.target.value);
    setFilteredQueryWithDebounce(event.target.value);
    setCounter(counter + 1);
  };

  const visibleColors = useMemo(
    () => getVisibleColors(colorsFromServer, filteredQuery),
    [filteredQuery]
  );

  return (
    <>
      <h3 onClick={() => setCount(count + 1)}>Count is {count}</h3>
      <input type="text" value={query} onChange={hadnleChange} />
      <ColorsList colors={visibleColors} />
    </>
  );
};
