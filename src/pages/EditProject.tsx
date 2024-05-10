import EditAuthor from '../components/EditAuthor';
import ToEdit from '../components/toEdit';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <ToEdit />
      <EditAuthor />
    </div>
  );
};

export default Home;
