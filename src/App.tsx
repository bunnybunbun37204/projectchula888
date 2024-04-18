import { useRef, useState } from "react";
import Example from "./components/Dialog";

interface Developer {
  id: number;
  name: string;
  image: string;
  role: string;
}

const developers: Developer[] = [
  { id: 1, name: "Game", image: "/images/game.jpg", role: "Project Manager" },
  { id: 2, name: "Pond", image: "/images/pond.jpg", role: "Database Manager" },
  { id: 3, name: "Wai", image: "/images/wai.jpg", role: "Back-end developer" },
  { id: 4, name: "Mui", image: "/images/mui.jpg", role: "Front-end developer" },
  {
    id: 5,
    name: "Pakky",
    image: "/images/pakky.jpg",
    role: "Front-end developer",
  },
];

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollStep] = useState(200);

  const scroll = (scrollOffset: number) => {
    containerRef.current?.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Example/>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow relative">
        <h1 className="text-3xl font-bold mb-8">Meet Our Team!!</h1>
        <div className="flex space-x-4 overflow-hidden relative">
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-gray-200 cursor-pointer rounded-full h-10 w-10 z-10"
            onClick={() => scroll(-scrollStep)}
          >
            {"<"}
          </div>
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-gray-200 cursor-pointer rounded-full h-10 w-10 z-10"
            onClick={() => scroll(scrollStep)}
          >
            {">"}
          </div>
          <div
            className="flex space-x-4 overflow-x-auto"
            ref={containerRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {developers.map((developer) => (
              <div
                key={developer.id}
                className="flex-none w-64 bg-white shadow rounded overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  className="w-full h-40 object-cover"
                  src={developer.image}
                  alt={developer.name}
                />
                <div className="p-4">
                  <p className="text-lg font-semibold">{developer.name}</p>
                  <p className="text-sm text-gray-500">{developer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
