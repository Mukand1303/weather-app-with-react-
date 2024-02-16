import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weather from './component/weather app/weather';
import WeatherHistory from './component/weather history/weatherHistory';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Weather />} />
          <Route path='/weather-app' element={<Weather />} />
          <Route path='/weatherhistory' element={<WeatherHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
