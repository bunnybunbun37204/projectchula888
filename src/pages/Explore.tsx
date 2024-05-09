import Blog from '../components/Blog';
import FilterTop from '../components/FilterTop';

const items = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Carrot', category: 'Vegetable' },
  { id: 3, name: 'Orange', category: 'Fruit' },
  { id: 4, name: 'Broccoli', category: 'Vegetable' },
  { id: 5, name: 'Banana', category: 'Fruit' },
  { id: 6, name: 'Lettuce', category: 'Vegetable' },
];

export default function Explore() {
  return (
    <div className="min-h-screen p-8 font-noto-sans">
      <div className="mt-12 mb-0 py-20 mx-auto max-w-7xl bg-white/50 shadow-xl">
        <div className="mx-auto max-w-7xl px-8 lg:px-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore</h2>
          <p className="mt-2 text-md sm:text-lg leading-8 text-gray-600">
            Learn how to grow your project with our expert advice.
          </p>
          <div className="border-t-2 border-gray-200 mt-10 pt-10">
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">Multi-Value Filter Example</h1>
              <FilterTop items={items} />
            </div>
            <Blog />
          </div>
        </div>
      </div>
    </div>
  );
}
