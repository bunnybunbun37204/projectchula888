import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Explore from './pages/Explore';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
};

export default App;
