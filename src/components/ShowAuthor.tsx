import { useBlogId } from '../utils/blogs';

interface ShowAuthorProp {
  id: number;
}
export default function ShowAuthor({ id }: ShowAuthorProp) {
  const { blog, isLoading, isError } = useBlogId(id);
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <h1>Error</h1>;
  if (blog !== undefined)
    return (
      <div className="grid gap-x-8 gap-y-8 px-8 xl:grid-cols-1">
        <ul role="list" className="grid gap-y-8 sm:grid-cols-1 sm:gap-y-8 xl:col-span-2">
          <div className="bg-red text-left pt-5 pl-3">Student</div>
          {blog.students.map((student) => (
            <li key={student.name} className="hover:cursor-pointer">
              <div className="bg-white border-2 shadow-md rounded-md p-6 transition-transform transform hover:cursor-pointer">
                <div className="flex items-center justify-between gap-x-6">
                  <div>
                    <a href="#">
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{student.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{student.email}</p>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <div className="bg-red text-left pl-3">Advisor</div>
          {blog.advisors.map((advisor) => (
            <li key={advisor.name} className="hover:cursor-pointer">
              <div className="bg-white border-2 shadow-md rounded-md p-6 transition-transform transform hover:cursor-pointer">
                <div className="flex items-center justify-between gap-x-6">
                  <a href="#">
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{advisor.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{advisor.email}</p>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}
