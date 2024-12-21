'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function SimpleDropDown(props : {
    options : Array<string>,
    selected ? : string,
    onSelectChange : Function
}) {
  const {options, selected, onSelectChange} = props;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm font-semibold text-white shadow-sm">
          {selected ?? 'Language'}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="bg-black absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {
            options.map((option) => {
                return <div className="py-1" key={option}>
                <MenuItem>
                  <span
                    onClick={() => {
                        onSelectChange(option)
                    }}
                    className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    {option}
                  </span>
                </MenuItem>
              </div>
            })
        }

      </MenuItems>
    </Menu>
  )
}
