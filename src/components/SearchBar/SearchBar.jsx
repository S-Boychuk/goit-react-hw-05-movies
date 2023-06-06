import { useState } from 'react';
import css from './SearchBar.module.css';

const SearchBar = ({ getSearchQuery }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSearchQuery(value);
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
