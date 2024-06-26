import { UserCircleIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function Profile() {
  const [getCookies] = useCookies(['student_id', 'student_fname', 'student_lname', 'student_email', 'student_faculty']);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  useEffect(() => {
    setFname(getCookies.student_fname);
    setEmail(getCookies.student_email);
    setId(getCookies.student_id);
    setLname(getCookies.student_lname);
  }, [getCookies]);
  return (
    <div className="min-h-screen min-w-max p-8 font-noto-sans">
      <div className="sm:mt-12 mb-0 py-16 mx-auto max-w-2xl sm:max-w-7xl bg-white/50 shadow-xl">
        <div className="flex sm:flex-row flex-col sm:flex-2 justify-center sm:justify-between items-center sm:mx-40 border-b-2 border-gray-200">
          <div className="flex flex-col items-center py-4 gap-y-1">
            <UserCircleIcon width={280} height={280} />
            <div className="flex flex-row gap-x-1 justify-center items-center">
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
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center sm:items-start mt-8 sm:mt-0 gap-y-1 sm:gap-y-4 sm:px-36">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {fname} {lname}
            </h2>
            <p className="text-lg font-semibold tracking-tight text-gray-900 sm:text-3xl">Student ID : {id}</p>
            <p className="text-sm font-semibold tracking-tight text-gray-900 sm:text-2xl">Email: {email}</p>
          </div>
        </div>
        <div className="relative items-center justify-center mx-40 mt-10"></div>
      </div>
    </div>
  );
}
