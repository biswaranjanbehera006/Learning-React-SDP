import { Menu } from "@headlessui/react";

export function HeadlessDropdown() {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="bg-black text-white px-4 py-2 rounded">
        Options
      </Menu.Button>

      <Menu.Items className="absolute mt-2 w-40 bg-white rounded shadow">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`block w-full px-4 py-2 text-left ${
                active ? "bg-gray-100" : ""
              }`}
            >
              Edit
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
