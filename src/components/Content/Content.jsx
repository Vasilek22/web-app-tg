import React, { useEffect, useState } from 'react';
import s from './Content.module.css';
import { useTelegram } from '../../hooks/useTelegram';
import Card from '../Card/Card';

const Content = () => {

  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3001/users') // API с бэкенда
      .then(response => response.json())
      .then(data => {
        console.log(data); // Проверим, что получаем
        setUsers(data); // Обновим состояние с данными
      })
      .catch(error => console.error('Ошибка:', error));
  }, []); // Этот useEffect выполняется только один раз при монтировании компонента


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
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default Content;
