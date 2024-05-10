import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Callback from './pages/Callback';
import BlogPost from './pages/Blog';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/team" element={<Team />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/blog/:id" element={<BlogPost />} />

    </Routes>
  );
};

export default App;
