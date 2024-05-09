import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import NewProj from './pages/NewProj';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newproj" element={<NewProj />} />
    </Routes>
  );
};

export default App;
