import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['header']}>
      <ul className={styles['header-list']}>
        <li className={styles['list-icon']}>
            Home
        </li>
        <li className={styles['list-icon']}>
            Collection
        </li>
        <li className={styles['list-icon']}>
        Favorites
        </li>
      </ul>
    </header>
  );
};

export default Header;