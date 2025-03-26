import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.mainContent}>
        <main className={s.content}>
          <Outlet />
        </main>
      </div>
      <Navbar />
    </div>
  );
}
