import { Avatar, Blockquote } from "flowbite-react";

export default function Testimonial({ img, alt, attribution, children }) {
  return (
    <Blockquote className="my-6 bg-gray-50 rounded-lg p-6 shadow-md">
      <Avatar
        className="float-right mb-4 mx-4 sm:mb-0"
        rounded
        size="lg"
        img={img}
        alt={alt}
      />
      <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed">
        {children}
      </p>
      <figcaption className="mt-4 text-center sm:text-left text-gray-600 text-sm sm:text-base italic">
        {attribution}
      </figcaption>
    </Blockquote>
  );
}
