
export const blog = 
  [
    {
        "project_id": 24,
        "title": "New Project 1234",
        "advisors": [
            {
                "id": 9,
                "advisor_id": "1234567893",
                "project_id": 24,
                "name": "ad4",
                "department": "mathcom",
                "email": "ad4@mail.com"
            }
        ],
        "description": "Description of the new project",
        "endDate": "2024-05-30T00:00:00.000Z",
        "startDate": "2024-04-30T00:00:00.000Z",
        "status": "In Progress",
        "students": [
            {
                "id": 13,
                "student_id": "6534435224",
                "project_id": 24,
                "email": "NmN4@gmail.com",
                "name": "Nm4N",
                "major": "SCI"
            },
            {
                "id": 14,
                "student_id": "6534435227",
                "project_id": 24,
                "email": "NmN7@gmail.com",
                "name": "Nm7N",
                "major": "SCI"
            }
        ]
    },
    {
        "project_id": 25,
        "title": "New Project 2344ff55",
        "advisors": [
            {
                "id": 10,
                "advisor_id": "1234567893",
                "project_id": 25,
                "name": "ad4",
                "department": "mathcom",
                "email": "ad4@mail.com"
            }
        ],
        "description": "Description of the new project",
        "endDate": "2024-05-30T00:00:00.000Z",
        "startDate": "2024-04-30T00:00:00.000Z",
        "status": "In Progress",
        "students": [
            {
                "id": 15,
                "student_id": "6534435224",
                "project_id": 25,
                "email": "NmN4@gmail.com",
                "name": "Nm4N",
                "major": "SCI"
            },
            {
                "id": 16,
                "student_id": "6534435227",
                "project_id": 25,
                "email": "NmN7@gmail.com",
                "name": "Nm7N",
                "major": "SCI"
            },
            {
                "id": 17,
                "student_id": "6534435223",
                "project_id": 25,
                "email": "6534435223@student.chula.ac.th",
                "name": "บัญญวัฒ นวลนาค",
                "major": "student"
            }
        ]
    },
];

export default function Blog() {
  // const { blog, isLoading, isError } = useBlog();
  // if (isLoading) return <h1>Loading</h1>;
  // if (isError) return <h1>Error</h1>;
  // if (blog)
    return (
      <div className="py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your project with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blog.map((projects) => (
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

                  <a className="relative z-10 rounded-full bg-status-active px-2 sm:px-3 py-1.5 font-medium text-gray-900">
                    {projects.status}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="sm:mt-3 mt-2 text-lg sm:text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
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
