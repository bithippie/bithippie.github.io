"use client";

import { Navbar } from "flowbite-react";

export default function Component() {
  return (
    <Navbar className="absolute bg-transparent w-screen flex">
        <Navbar.Brand href="/">
            <img src="/logo.png" className="h-20" alt="BitHippie Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#we-work-together" className="text-platinum text-2xl">Services</Navbar.Link>
          <Navbar.Link href="#faq" className="text-platinum text-2xl">FAQ</Navbar.Link>
          <Navbar.Link href="#schedule" className="text-platinum text-2xl">Schedule</Navbar.Link>
          <Navbar.Link href="#about" className="text-platinum text-2xl">About</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
}