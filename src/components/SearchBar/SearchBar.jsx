import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { VscEdit } from 'react-icons/vsc';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();
    if (query === '') {
      toast('Please enter the query word', {
        icon: <VscEdit style={{ color: 'red' }} />,
      });
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <header>
      <Toaster position="top-right" />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
