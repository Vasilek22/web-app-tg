import React, { useState, useEffect } from 'react';
import s from './AddTrackForm.module.css';
import { useTelegram } from '../../hooks/useTelegram';

export default function AddTrackForm() {
  const { user } = useTelegram(); // Получаем данные о пользователе
  const [trackName, setTrackName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  // Обработка изменения названия трека
  const handleTrackNameChange = (e) => {
    setTrackName(e.target.value);
  };

  // Обработка изменения имени исполнителя
  const handleArtistNameChange = (e) => {
    setArtistName(e.target.value);
  };

  // Обработка изменения файла
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Проверка на заполненность полей
    if (!trackName || !artistName || !file) {
      setError('Все поля должны быть заполнены');
      return;
    }
  
    // Создаем объект FormData для отправки данных
    const formData = new FormData();
    formData.append('trackName', trackName);
    formData.append('artistName', artistName);
    formData.append('file', file);
  
    // Получаем chatId из данных пользователя
    const userChatId = user?.id; // Используем chatId из объекта user
  
    if (!userChatId) {
      setError('Не удалось получить chatId');
      return;
    }
  
    // Отправляем данные на сервер с использованием FormData
    fetch('http://localhost:3001/tracks', {
      method: 'POST',
      body: formData,
      headers: {
        // Убираем 'Content-Type', так как FormData автоматически установит правильный тип
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Трек добавлен', data);
        setError('');
        setTrackName('');
        setArtistName('');
        setFile(null);
      })
      .catch((error) => {
        console.error('Ошибка при добавлении трека:', error);
      });
  };
  

  return (
    <div className={s.formContainer}>
      <h2>Добавить трек</h2>
      <form onSubmit={handleSubmit} className={s.addTrackForm}>
        <div className={s.inputGroup}>
          <label htmlFor="trackName">Название трека</label>
          <input
            type="text"
            id="trackName"
            value={trackName}
            onChange={handleTrackNameChange}
            placeholder="Введите название трека"
          />
        </div>

        <div className={s.inputGroup}>
          <label htmlFor="artistName">Исполнитель</label>
          <input
            type="text"
            id="artistName"
            value={artistName}
            onChange={handleArtistNameChange}
            placeholder="Введите имя исполнителя"
          />
        </div>

        <div className={s.inputGroup}>
          <label htmlFor="file">Выберите файл</label>
          <input
            type="file"
            id="file"
            accept="audio/*"
            onChange={handleFileChange}
          />
        </div>

        {error && <p className={s.error}>{error}</p>}

        <button type="submit" className={s.submitButton}>Добавить трек</button>
      </form>
    </div>
  );
}
