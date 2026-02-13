import styles from './Box.module.css';

const Box = ({ value, onClick, isLocked }) => {
  const getBoxClass = () => {
    if (isLocked) {
      return styles.locked;
    }
    return value % 2 === 0 ? styles.even : styles.odd;
  };

  const handleClick = () => {
    if (!isLocked) {
      onClick();
    }
  };

  return (
    <div 
      className={`${styles.box} ${getBoxClass()}`}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default Box;
