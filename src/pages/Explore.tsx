import Blog from '../components/Blog';
import FilterBox from '../components/FilterBox';
import SearchBox from '../components/Searchbox';

export default function Explore() {


  return (
    <div className="min-h-screen p-8 font-noto-sans">
      <div className="mt-12 mb-0 py-20 mx-auto max-w-7xl bg-white/50 shadow-xl">
        <div className="mx-auto max-w-7xl px-8 lg:px-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore</h2>
          <p className="mt-2 text-md sm:text-lg leading-8 text-gray-600">
            Learn how to grow your project with our expert advice.
          </p>
          <div className="border-t-2 border-gray-200 mt-10 pt-5">
            <div className="flex flex-row justify-between">
              <FilterBox />
              <SearchBox />
            </div>
            <Blog />
          </div>
        </div>
      </div>
    </div>
  );
}
