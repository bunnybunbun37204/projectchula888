import { Fragment, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { blog } from './Blog'; // Assuming blog is an array of projects

export default function FilterBox() {
  const [selectedProject, setSelectedProject] = useState<string>(""); // State to track selected project title

  const handleProjectSelect = (title: string) => {
    setSelectedProject(title); // Update selected project title when clicked
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className=" mt-0">
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm">
          {selectedProject || 'Project Title'} {/* Display selected title or default text */}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>


      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {blog.map((project) => (
              <MenuItem key={project.title}>
                <button
                  className={`flex w-full justify-start items-center p-2 focus:outline-none ${
                    selectedProject === project.title ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleProjectSelect(project.title)}
                >
                  {project.title}
                </button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
      <div className=''>

      </div>
    </Menu>
  );
}
