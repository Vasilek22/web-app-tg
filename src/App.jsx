import './App.css';

function App() {
  const tg = window.Telegram.WebApp
  
  return (
    <div className="App">
      <p className={'username'}>
        {tg.initDataUnsafe?.user?.username}
      </p>
    </div>
  );
}

export default App;
