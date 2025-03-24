import React from 'react';
import s from './Content.module.css';
import { useTelegram } from '../../hooks/useTelegram';

const Content = () => {

    const {user} = useTelegram();

  // Получаем текущее время
  const currentHour = new Date().getHours();
  
  // Приветствие в зависимости от времени суток
  let greeting = '';
  if (currentHour < 6) {
    greeting = 'Доброй ночи';
  } else if (currentHour < 12) {
    greeting = 'Доброе утро';
  } else if (currentHour < 18) {
    greeting = 'Добрый день';
  } else {
    greeting = 'Добрый вечер';
  }

  return (
    <div className={s.content}>
      <h1 className={s.title}>{greeting}, {user?.username || 'Гость'}!</h1>
      <p className={s.text}>Здесь будет основной контент страницы. 🚀</p>
      <p className={s.text}>Пролистывайте, чтобы увидеть, как работает фиксированное меню. 🌐</p>

      {/* Раздел 1 */}
      <div className={s.section}>
        <h2 className={s.sectionTitle}>Как создать свою криптовалюту? 💰</h2>
        <p className={s.sectionText}>
          Мы покажем вам, как сделать свою криптовалюту с минимальными затратами и на базе блокчейна. 🌍
        </p>
        <div className={s.item}>
          <p className={s.itemTitle}>Шаг 1: Определитесь с концепцией</p>
          <p>Разработайте уникальную идею для вашей криптовалюты.</p>
        </div>
        <div className={s.item}>
          <p className={s.itemTitle}>Шаг 2: Создание блокчейна</p>
          <p>Научитесь разрабатывать свой собственный блокчейн для криптовалюты.</p>
        </div>
      </div>

      {/* Раздел 2 */}
      <div className={s.section}>
        <h2 className={s.sectionTitle}>Инновации в криптовалютах 🔑</h2>
        <p className={s.sectionText}>
          Криптовалюты открывают новые горизонты для цифровых платежей. Узнайте, как инновации меняют мир!
        </p>
      </div>

      {/* Раздел 3 */}
      <div className={s.section}>
        <h2 className={s.sectionTitle}>Преимущества блокчейн технологий 🛠️</h2>
        <p className={s.sectionText}>
          Узнайте о сильных сторонах блокчейн технологий, таких как безопасность, прозрачность и децентрализация.
        </p>
      </div>
    </div>
  );
}

export default Content;
