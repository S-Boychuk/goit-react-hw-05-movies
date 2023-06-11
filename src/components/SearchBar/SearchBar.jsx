import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './SearchBar.module.css';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateQueryString(value);
    setValue('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        value={value}
        onChange={handleChange}
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
