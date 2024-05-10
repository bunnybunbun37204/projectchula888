import { useBlogId } from '../utils/blogs';
import ShowAuthor from './ShowAuthor';

interface ToShowProps {
    id: number;
}

export default function ToShow({id} : ToShowProps) {
    const { blog, isLoading, isError } = useBlogId(id);
    if (isLoading) return <h1>Loading</h1>;
    if (isError) return <h1>Error</h1>;
    if (blog !== undefined)
  return (
    // bg
    <div className="bg-gray-100 pb-10 min-h-fit">
      
      {/* main part */}
      <div className="mx-60">
        {/* page */}
        <div className="bg-white rounded-3xl pb-10">
          <div className="text-4xl font-bold text-center py-20">{blog.title}</div>
          <div className="mx-5 px-20 py-5 border-y-2 border-y-black">{blog.description}</div>
          <div className="flex flex-col mx-5 px-20 py-5 border-b-2 border-y-black gap-2">
            <div>
              project_id : {blog.project_id}
              <div>
                startDate : {blog.startDate}
                <div>
                  endDate : {blog.endDate}
                  <div>status : {blog.status}</div>
                </div>
              </div>
            </div>
          </div>
          <ShowAuthor id={id}/>
        </div>
      </div>
    </div>
  );
}