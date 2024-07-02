import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

import {
    IconChevronDown,
    IconPhone,
    IconPlayerPlay,
    IconList
  } from '@tabler/icons-react';
import { items } from '../category';
import Link from 'next/link';

  

const solutions = items
const callsToAction = [
  { name: 'View all products', href: '/all-product', icon: IconList },
  { name: 'Contact sales', href: '/contact', icon: IconPhone },
]

export const  Dropdown = () => {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span>Category</span>
        <IconChevronDown className="h-5 w-5" aria-hidden="true" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/4 sm:left-1/4 md:left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4 max-h-80 overflow-y-scroll">
            {solutions.map((item) => (
              <div key={item.title} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  {item.icon}
                </div>
                <div>
                  <Link href={`/product-list#${item.title}`} className="font-semibold text-gray-900">
                    {item.title}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 hidden md:block text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
