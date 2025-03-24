import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import { useTelegram } from './hooks/useTelegram';

function App() {

  return (
    <div className="App">
      <Content /> 
      <Navbar />  
    </div>
  );
}

export default App;
