import { useBlog } from '../utils/blogs';

interface BlogProps {
  searchQuery: string;
}

export default function Blog({ searchQuery }: BlogProps) {
  function convertStatus(status: string) {
    if (status === 'Pending') {
      return 'bg-status-pending';
    } else if (status === 'Published') {
      return 'bg-status-inactive';
    } else if (status === 'In Progress') {
      return 'bg-status-active';
    } else return '';
  }

  const { blog, isLoading, isError } = useBlog();
  if (isLoading) return <h1>Loading</h1>;
  if (isError) return <h1>Error</h1>;
  if (blog) {
    const filteredBlogs = blog.filter((project) => project.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
      <div className="py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {filteredBlogs.map((projects) => (
              <article
                key={projects.project_id}
                className="flex max-w-xl flex-col justify-between transition-transform transform hover:scale-105 shadow-sm
              bg-white p-6 rounded-lg"
              >
                <div className="flex w-full text-xs justify-between items-center">
                  <time dateTime={projects.startDate} className="text-gray-500 font-noto-sans">
                    {new Date(projects.startDate).toLocaleString('th-TH', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>

                  <a
                    className={`relative z-10 rounded-full ${convertStatus(projects.status)}  px-2 sm:px-3 py-1.5 font-medium text-gray-900`}
                  >
                    {projects.status}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="sm:mt-3 mt-2 text-lg sm:text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={`/blog/${projects.project_id}`}>
                      <span className="absolute inset-0" />
                      {projects.title}
                    </a>
                  </h3>
                  <p className="sm:mt-5 mt-1 line-clamp-4 text-sm leading-6 text-gray-600">{projects.description}</p>
                </div>
                <div className="relative mt-8 flex justify-end items-center">
                  <div className="text-md leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {projects.students[0].name}
                      </a>
                    </p>
                    <p className="text-gray-600">{projects.advisors[0].name}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
