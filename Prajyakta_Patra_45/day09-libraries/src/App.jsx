import React, { useState } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h2 className="mb-4 font-bold text-lg">Component Libraries Demo</h2>

        {/* Custom Button */}
        <button className="px-4 py-2 bg-gray-700 text-white rounded mr-2">
          Custom Button
        </button>

        {/* Library Button (just Tailwind styled) */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded mr-2">
          Library Button
        </button>

        {/* Menu */}
        <Menu as="div" className="inline-block relative mr-2">
          <Menu.Button className="px-4 py-2 bg-purple-600 text-white rounded">
            Menu
          </Menu.Button>
          <Menu.Items className="absolute mt-2 w-32 bg-white shadow-lg rounded">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 w-full text-left`}
                >
                  Option 1
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 w-full text-left`}
                >
                  Option 2
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>

        {/* Open Dialog */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Open Dialog
        </button>

        <Transition show={isOpen} as={React.Fragment}>
          <Dialog
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30"
          >
            <Dialog.Panel className="bg-white p-6 rounded shadow-lg">
              <Dialog.Title className="font-bold text-lg">
                Dialog Title
              </Dialog.Title>
              <Dialog.Description className="mt-2">
                This is a simple dialog.
              </Dialog.Description>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            </Dialog.Panel>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}
