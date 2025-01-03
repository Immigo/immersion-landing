'use client'
import Link from "next/link"
/* eslint prefer-const: 0 */
/* eslint no-unused-vars: 0 */

import LocalSwitcher from "./forms/local-switcher"

export const NavBarSimple = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://cdn.prod.website-files.com/644c0ecc4a055c564b922d0b/645529068ac0540fd0b83c49_Immigo%20White%20Logo.svg"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            {/* <button
              type="button"
              onClick={() => {}}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button> */}
            <div className="mr-6">
              <LocalSwitcher />
            </div>
            <a href="https://app.immigo.io/login" target="blank" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="mr-6">
              <LocalSwitcher />
            </div>
            <a href="https://app.immigo.io/login" target="blank" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        </header>
    )
}