"use client";

import { Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar className="absolute bg-transparent w-full flex">
      <Navbar.Brand href="/">
        <img src="/logo.png" className="h-20" alt="BitHippie Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="bg-gradient-to-b from-transparent to-bg-dark-grey z-10 backdrop-blur-md opacity-95">
        <Navbar.Link
          href="#we-work-together"
          className="text-platinum text-2xl hover:text-moss"
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          href="#faq"
          className="text-platinum text-2xl hover:text-moss"
        >
          FAQ
        </Navbar.Link>
        <Navbar.Link
          href="#schedule"
          className="text-platinum text-2xl hover:text-moss"
        >
          Schedule
        </Navbar.Link>
        <Navbar.Link
          href="#about"
          className="text-platinum text-2xl hover:text-moss"
        >
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
