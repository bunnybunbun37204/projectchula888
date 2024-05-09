import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
