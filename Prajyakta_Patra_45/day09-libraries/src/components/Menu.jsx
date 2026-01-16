import { Menu } from "@headlessui/react";

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="px-4 py-2 bg-indigo-600 text-white rounded">
        Menu
      </Menu.Button>

      <Menu.Items className="absolute mt-2 w-40 bg-white border rounded shadow">
        <Menu.Item>
          {({ active }) => (
            <div className={`px-4 py-2 ${active && "bg-gray-100"}`}>
              Profile
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div className={`px-4 py-2 ${active && "bg-gray-100"}`}>
              Logout
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
