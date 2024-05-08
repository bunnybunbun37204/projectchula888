import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Navbar from './components/Navbar.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <div className= "bg-gradient-to-b from-white via-third-gradient to-last-gradient ">
    <Navbar />
    <App />
    </div>
  </BrowserRouter>,
);