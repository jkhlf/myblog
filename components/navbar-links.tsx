import React from 'react'
import { ThemeToggle } from './theme-toggle'

function NavLinks() {
  return (
    <nav className="flex justify-center items-center mb-12 ">
       <ThemeToggle />
             {/* <h1 className="text-4xl font-normal">Hey, I'm Khalaf.</h1>  */}
            <div className="invisible sm:visible">
            </div>
            <div className="flex gap-4 text-sm border rounded-md px-2 py-1">
              
              <a href="/" className="hover:text-gray-600 text-sm  px-2 py-1">/HOME</a>
              <a href="/writing" className="hover:text-gray-600 text-sm  px-2 py-1">/WRITING</a>
              <a href="/about" className="hover:text-gray-600 text-sm  px-2 py-1">/ABOUT</a>
            </div>
          </nav>
  )
}

export default NavLinks