"use client";

import { Navbar, Link } from "flowbite-react";
import ScheduleConsultation from "./schedule_consultation";

export default function Component() {
  return (
    <Navbar className="absolute bg-transparent w-screen flex">
        <Navbar.Brand as={Link} href="/">
            <img src="/logo.png" className="h-20" alt="BitHippie Logo" />
        </Navbar.Brand>
        <ScheduleConsultation />
    </Navbar>
  );
}