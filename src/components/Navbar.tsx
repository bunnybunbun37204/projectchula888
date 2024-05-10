import { Fragment, useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import SearchBox from './Searchbox';

const navigation = [
  { name: 'Explore', href: '/explore', current: false },
  { name: 'About us', href: '/team', current: false },
];
const links = [{ name: 'My Profile', href: '/profile', current: false }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [login, setLogin] = useState(false);
  return (
    <Disclosure as="nav" className="font-noto-sans top-0 sticky w-full shadow-sm bg-white/40 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between">
              {/* mobile menu */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton
                  className="relative inline-flex items-center justify-center rounded-md p-2
                 text-gray-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* logo */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img className="h-8 w-auto" src="/icons/cHips.svg" alt="Chula 888" />
                  </Link>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <DisclosureButton className="text-gray-900 pl-2 text-2xl font-semibold">Chula888</DisclosureButton>
                  </Link>
                </div>

                {/* pages */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        to={item.href}
                        key={index}
                        className={classNames(
                          'text-gray-900 hover:bg-pink-100 rounded-md px-3 py-2 text-lg font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 -mt-1.5 max-lg:hidden">
                  <SearchBox />
                </div>
              </div>

              {/* Login */}
              <div className="absolute inset-y-0 right-0 flex flex-row flex-2 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <DisclosureButton
                  className={'bg-white font-medium hover:bg-pink-100 rounded-md px-3 py-2 text-sm max-sm:hidden'}
                >
                  {login ? (
                    <p className="block" aria-hidden="true">
                      Username
                    </p>
                  ) : (
                    <a href='https://account.it.chula.ac.th/html/login.html?serviceName=PUSSADU-SUCU&service=https://projectchula888.pages.dev/callback' className="block" aria-hidden="true" onClick={() => setLogin(true)}>
                      Login
                    </a>
                  )}
                </DisclosureButton>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm " disabled={!login}>
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {login ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8 bg-white rounded-full"
                          onClick={() => null}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      )}
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
                    <MenuItems className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg">
                      {links.map((item, index) => (
                        <MenuItem key={index}>
                          <Link
                            to={item.href}
                            className={classNames(
                              'text-gray-700 hover:bg-pink-100 rounded-md px-3 py-2 text-sm flex items-center justify-center',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                      <MenuItem>
                        <Link
                          to="/"
                          onClick={() => setLogin(false)}
                          className="text-gray-700 hover:bg-pink-100 rounded-md px-3 py-2 text-sm flex items-center justify-center"
                        >
                          Sign out
                        </Link>
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* mobile menu dropdown */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <DisclosureButton
                  as="a"
                  key={index}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-white text-gray-900' : 'text-gray-900 hover:bg-neutral-100',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
