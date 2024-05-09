import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-max-height items-center justify-center flex font-noto-sans">
      <div className="sm:p-20 p-10 shadow-2xl  sm:max-w-3xl text-center bg-white/5 rounded-3xl">
        <h1 className="font-extrabold text-3xl sm:text-6xl bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          Unlimited Thesises, Projects, and more.
        </h1>
        <h2 className="font-medium text-lg sm:text-2xl pt-5 sm:pt-10 bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-transparent">
          Register anywhere. Withdraw anytime.
        </h2>
        <p className="text-sm sm:text-xl pt-2 bg-gradient-to-l from-slate-500 to-slate-800 bg-clip-text text-transparent">
          IF YOU READY PRESS THE BUTTON!
        </p>
        <div className="flex justify-center">
          <Link
            to="/Explore"
            className=" flex max-w-fit text-white/90 rounded-full mt-8 sm:mt-10 p-5 sm:p-10 font-semibold text-xl sm:text-3xl bg-gradient-to-r from-pink-500 to-violet-600 hover:from-indigo-400 hover:to-cyan-400 ..."
          >
            Click me baby!
          </Link>
        </div>
      </div>
    </div>
  );
}
