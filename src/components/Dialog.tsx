import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function Example() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationCircleIcon className="h-6 w-6 text-yellow-300" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Accept our policy
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 font-noto-sans">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia iure suscipit deleniti odio
                          optio cumque temporibus quas recusandae corrupti harum. Voluptas fugit dignissimos pariatur
                          odio nesciunt fugiat rerum iusto at! ผักกี้ หวาย ปอน มุ้ย เกม Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Perspiciatis necessitatibus minus magni voluptates quaerat,
                          aspernatur placeat nemo commodi impedit consectetur assumenda at quidem accusantium. Sit
                          fugiat repellat commodi quaerat est. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          Praesentium dicta at maiores, laborum tempore aliquam est exercitationem non asperiores,
                          excepturi eveniet accusantium, voluptate minima totam quasi amet quam possimus ipsa! Lorem
                          ipsum dolor sit amet consectetur adipisicing elit. Suscipit ratione unde et impedit, nobis
                          iusto iste in nostrum dolorem quaerat excepturi culpa atque sed eveniet, cupiditate commodi
                          itaque totam molestiae! ผักกี้ หวาย ปอน มุ้ย เกม ผักกี้ หวาย ปอน มุ้ย เกม
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Accept
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
