import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Project from './pages/Project';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
};

export default App;
