import css from './LoadMoreBtn.module.css';

interface onClickProps {
  onClick: () => void;
}

export const LoadMoreBtn: React.FC<onClickProps> = ({ onClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      LoadMoreBtn
    </button>
  );
};

export default LoadMoreBtn;
