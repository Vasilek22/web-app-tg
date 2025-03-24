import React from 'react';
import styles from './Navbar.module.css'; // Импортируем стили из CSS-модуля
import { FaHome, FaInfoCircle, FaConciergeBell, FaPhoneAlt } from 'react-icons/fa'; // Импортируем иконки

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarItem}>
        <FaHome className={styles.icon} />
        <span className={styles.label}>Домой</span>
      </div>
      <div className={styles.navbarItem}>
        <FaInfoCircle className={styles.icon} />
        <span className={styles.label}>О нас</span>
      </div>
      <div className={styles.navbarItem}>
        <FaConciergeBell className={styles.icon} />
        <span className={styles.label}>Услуги</span>
      </div>
      <div className={styles.navbarItem}>
        <FaPhoneAlt className={styles.icon} />
        <span className={styles.label}>Контакты</span>
      </div>
    </div>
  );
};

export default Navbar;
