import React, { useState, useEffect } from 'react';
import s from './AddTrackForm.module.css';

export default function AddTrackForm() {
  const [trackName, setTrackName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [chatId, setChatId] = useState(''); // Получить chatId из состояния

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

  // Получение chatId из бота
  useEffect(() => {
    // Например, получить chatId из состояния пользователя
    // setChatId(получить из контекста или другого места, где хранится chatId)
    setChatId('8033694154'); // Пример chatId
  }, []);

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
  
    // Здесь предполагается, что chatId уже получен из состояния или контекста
    const userChatId = chatId; // Получите chatId из состояния
  
    // Отправляем данные на сервер
    fetch('http://localhost:3001/tracks', {
      method: 'POST',
      body: JSON.stringify({
        chatId: userChatId,
        trackName: trackName,
        artistName: artistName,
        filePath: '/path/to/file' // Замените на реальный путь после загрузки файла
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Трек добавлен', data);
      setError('');
      setTrackName('');
      setArtistName('');
      setFile(null);
    })
    .catch(error => {
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
