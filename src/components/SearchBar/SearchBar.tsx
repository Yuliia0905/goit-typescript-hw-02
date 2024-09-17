import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { VscEdit } from 'react-icons/vsc';

interface onSubmitProps {
  onSubmit: (searchQuery: string) => void;
  onQueryChange: (query: string) => void;
  query: string;
}

const SearchBar: React.FC<onSubmitProps> = ({
  onSubmit,
  query,
  onQueryChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (query.trim() === '') {
      toast('Please enter the query word', {
        icon: <VscEdit style={{ color: 'red' }} />,
      });
      return;
    }
    onSubmit(query.trim());
    onQueryChange('');
  };

  return (
    <header>
      <Toaster position="top-right" />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={handleChange}
          // onChange={e => onQueryChange(e.target.value)}
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
