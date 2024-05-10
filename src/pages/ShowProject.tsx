import ShowAuthor from '../components/showAuthor';
import ToShow from '../components/toShow';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <ToShow />
            <ShowAuthor />
        </div>
    );
};

export default Home;
