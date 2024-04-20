const people = [
  {
    name: 'Bunyawat Naunnak',
    role: 'Project Manager',
    imageUrl: '/images/game.jpg',
    ig: 'https://www.instagram.com/plzcallmegame/',
  },
  {
    name: 'Pongsakorn Phimphongpisarn',
    role: 'Database Manager',
    imageUrl: '/images/pond.jpg',
    ig: 'https://www.instagram.com/pond.psk54/',
  },
  {
    name: 'Thanapat Donlachanon',
    role: 'Front-end developer',
    imageUrl: '/images/pakky.jpg',
    ig: 'https://www.instagram.com/pakk_kky/',
  },
  {
    name: 'Mintada Puangmintada',
    role: 'Front-end developer',
    imageUrl: '/images/mui.jpg',
    ig: 'https://www.instagram.com/min.taadaa/',
  },
  {
    name: 'Natawat Chaniat',
    role: 'Back-end developer',
    imageUrl: '/images/wai.jpg',
    ig: 'https://www.instagram.com/wxi19th/',
  },
  // More people...
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-noto-sans gap-1">
            Meet our
            <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
              &nbsp;คอมชาย
            </div>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-noto-sans">
            This project is Database system class project that was made by
            <strong>&nbsp;คอมชาย</strong> Chula
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 ml-14">
          {people.map((person) => (
            <li key={person.name} className="hover:cursor-pointer">
              <a href={person.ig}>
                <div className="bg-white shadow-md rounded-md p-6 transition-transform transform hover:scale-105 hover:cursor-pointer">
                  <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
