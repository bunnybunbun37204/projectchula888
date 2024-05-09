import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Navbar from './components/Navbar.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div className="bg-gradient-to-tr from-white from-35% via-fuchsia-100 via-60% to-sky-50 to-90%">
      <Navbar />
      <App />
    </div>
  </BrowserRouter>,
);
