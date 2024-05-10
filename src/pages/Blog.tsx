import { useParams } from 'react-router-dom';
import ToShow from '../components/ToShow';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // Use id if it's defined, otherwise use '1' as the default value
  const parsedId = id !== undefined ? parseInt(id) : 1;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <ToShow id={parsedId} />
    </div>
  );
};

export default BlogPost;
