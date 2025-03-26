import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import s from './Header.module.css';  // Предполагается, что у вас есть CSS файл

export default function Header() {
  const { user } = useTelegram();

  // Получаем текущее время для приветствия
  const currentHour = new Date().getHours();
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
    <header className={s.header}>
      {/* Если у пользователя есть фото, то выводим его */}
      {user?.photo_url ? (
        <img 
          src={user?.photo_url} 
          alt="User Photo" 
          className={s.userPhoto} 
        />
      ) : (
        <div className={s.defaultPhoto}>Гость</div>  // Если фото нет, выводим текст
      )}

      <h1 className={s.title}>{greeting}, {user?.username || 'Гость'}!</h1>
    </header>
  );
}
