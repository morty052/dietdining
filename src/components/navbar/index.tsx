/* eslint-disable prettier/prettier */
import { Menu, Phone, X } from 'lucide-react'
import { logo, logoAlt } from 'assets'
import { useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const links = [
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'About',
    to: '/about'
  },
  {
    title: 'Blog',
    to: '/blog'
  },
  {
    title: 'Contact Us',
    to: '/contact'
  }
]

function DropDown({ open }: { open: boolean }) {
  return (
    <div
      id="dropdown"
      className={`  fixed top-[50px] z-10 w-full bg-white shadow ${
        !open ? 'scale-out-top' : 'scale-in-top'
      }`}
    >
      <div className="flex flex-col pb-12 pt-4">
        <NavLink reloadDocument to={'/'} className="border px-2  py-4">
          Home
        </NavLink>
        <NavLink
          reloadDocument
          to={'/about'}
          className="border border-y-black p-2 py-4"
        >
          About
        </NavLink>
        <NavLink
          reloadDocument
          to={'/blog'}
          className="border border-b-black p-2 py-4"
        >
          Blog
        </NavLink>
        <NavLink
          reloadDocument
          to={'/contact'}
          className="border-b border-black px-2  py-4"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  )
}

function Navbarlink({ to, title }: { to: string; title: string }) {
  return (
    <NavLink
      reloadDocument
      className={`   text-gray-800 transition-colors  duration-200 ease-in hover:text-baseGreen`}
      to={`${to}`}
    >
      {title}
    </NavLink>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav id="navbar" className="sticky top-0 z-50  lg:bg-white ">
        <div className="mx-auto flex max-w-7xl items-center justify-between bg-[#0b0320] px-2 py-4 lg:bg-white lg:px-8">
          <div className="flex items-center gap-x-2">
            <img className="w-10 lg:hidden" src={logo} alt="" />
            <img className="hidden w-10 lg:block" src={logoAlt} alt="" />
            <p className=" font-serif font-black text-gray-50 lg:text-2xl lg:text-darkBlue">
              Diet Dining
            </p>
          </div>
          {/* Mobile MENU */}
          <div className="lg:hidden">
            {!open ? (
              <Menu onClick={() => setOpen(!open)} color="white" />
            ) : (
              <X onClick={() => setOpen(!open)} color="white" />
            )}
          </div>

          {/* NAVBAR LINKS */}
          <div className="hidden gap-x-6 lg:flex">
            {links.map((link) => (
              <Navbarlink key={link.title} to={link.to} title={link.title} />
            ))}
          </div>

          {/* BUTTON */}
          <div className="hidden items-center gap-x-2 rounded-full bg-baseGreen p-2.5 lg:flex">
            <div className="">
              <Phone size={18} color="white" fill="white" />
            </div>
            <span className="text-sm font-medium text-white">
              +1 (604) 757-7855
            </span>
          </div>
        </div>
      </nav>
      {open && <DropDown open={open} />}
    </>
  )
}
