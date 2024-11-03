"use client";

import { Button } from "flowbite-react";

export default function Component() {
  return (
    <a href="/#schedule">
      <Button className="bg-moss text-white" size="xl">
        <span className="hidden sm:block">Schedule My Free Consultation</span>
        <span className="sm:hidden">Schedule A Call</span>
      </Button>
    </a>
  );
}