import { useState, useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Content from './components/Content/Content';
import AddTrackForm from './components/AddTrackForm/AddTrackForm';
function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const { user } = useTelegram(); // Получаем пользователя из Telegram WebApp

  // Функция для проверки времени суток
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) {
      return "Доброе утро";
    } else if (hours >= 12 && hours < 18) {
      return "Добрый день";
    } else {
      return "Добрый вечер";
    }
  };

  useEffect(() => {
    // Убираем заставку через 3 секунды
    const timer = setTimeout(() => setShowWelcomeScreen(false), 3000);
    return () => clearTimeout(timer); // Очищаем таймер при размонтировании
  }, []);

  return (
    <div className="App">
      {showWelcomeScreen ? (
        <div className="welcome-screen">
          <h1>{getGreeting()}, {user?.first_name || 'Гость'}!</h1>
        </div>
      ) : (
        <Routes> 
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
            <Route path="/add-track" element={<AddTrackForm />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
