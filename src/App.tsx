import Example from "./components/Dialog";
import Blog from "./components/Blog";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Example />
      <About />
      <Blog />
    </div>
  );
};

export default App;
