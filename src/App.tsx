import './App.scss';
import HomePage from './page/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>

  );
}

export default App;
