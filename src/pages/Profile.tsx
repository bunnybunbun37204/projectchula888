import { UserCircleIcon } from '@heroicons/react/16/solid';
import Blog from '../components/Blog';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="min-h-screen min-w-max p-8 font-noto-sans">
      <div className="sm:mt-12 mb-0 py-16 mx-auto max-w-2xl sm:max-w-7xl bg-white/50 shadow-xl">
        <div className="flex sm:flex-row flex-col sm:flex-2 justify-center sm:justify-between items-center sm:mx-40 border-b-2 border-gray-200">
          <div className="flex flex-col items-center py-4 gap-y-1">
            <UserCircleIcon width={280} height={280} color="gray" />
            <div className="flex flex-row gap-x-1 justify-center items-center">
              <a href='/' className="text-xs font-medium sm:text-sm ">Edit profile</a>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center sm:items-start mt-8 sm:mt-0 gap-y-1 sm:gap-y-4 sm:px-36">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">FIRSTNAME LASTNAME</h2>
            <p className="text-lg font-semibold tracking-tight text-gray-900 sm:text-3xl">Student ID</p>
            <p className="text-sm font-semibold tracking-tight text-gray-900 sm:text-2xl">
              Email: 6534451023@student.chula.ac.th
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mx-40">
          <h1 className="text-xl font-semibold  pt-3">Projects</h1>
          <Link to="/New">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
          </Link>
        </div>
        <div className="relative items-center justify-center mx-40 mt-10">
          <Blog />
        </div>
      </div>
    </div>
  );
}
