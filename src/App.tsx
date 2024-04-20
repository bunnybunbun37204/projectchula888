import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default App;
