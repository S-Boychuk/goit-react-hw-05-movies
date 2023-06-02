const searchBar = () => {
  return (
    <div className="container">
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default searchBar;
