import { useState, useEffect } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import { useTelegram } from './hooks/useTelegram';

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
        <>
          <Content />
          <Navbar />
        </>
      )}
    </div>
  );
}

export default App;
