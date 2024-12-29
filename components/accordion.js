import { Fragment, useState } from "react";

import { AnimatePresence, easeOut, motion } from "framer-motion";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export function Accordion({ accordionItems }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDisclosure = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="h-full w-full flex items-center pb-8">
      <div className="w-full max-w-2xl divide-y divide-moss rounded-xl bg-white shadow-lg">
        {accordionItems.map((item, index) => {
          return (
            <Disclosure key={item.key} as="div" className="p-6">
              <>
                <DisclosureButton
                  className="group flex flex-col w-full items-center justify-between text-left"
                  onClick={() => toggleDisclosure(index)}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg font-semibold text-gray-800 group-data-[hover]:text-gray-600">
                      {item.title}
                    </span>
                    <ChevronDownIcon
                      className={`w-6 h-6 text-moss duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <DisclosurePanel
                        static
                        as={Fragment}
                        transition
                        className="text-base text-gray-600 leading-relaxed origin-top transition duration-300 ease-out data-[closed]:-translate-y-4 data-[closed]:opacity-0"
                      >
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: easeOut }}
                          className="overflow-hidden"
                        >
                          {item.text}
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </DisclosureButton>
              </>
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
