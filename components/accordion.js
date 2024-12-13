import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export function Accordion({ accordionItems }) {
  return (
    <div className="h-full w-full flex items-center">
      <div className="w-full max-w-2xl divide-y divide-moss rounded-xl bg-white shadow-lg">
        {accordionItems.map((item) => {
          return (
            <Disclosure key={item.key} as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between text-left">
                <span className="text-lg font-semibold text-gray-800 group-data-[hover]:text-gray-600">
                  {item.title}
                </span>
                <ChevronDownIcon className="w-6 h-6 text-moss group-data-[open]:rotate-180 duration-300" />
              </DisclosureButton>
              <DisclosurePanel
                transition
                className="text-base text-gray-600 leading-relaxed origin-top transition duration-300 ease-out data-[closed]:-translate-y-4 data-[closed]:opacity-0"
              >
                {item.text}
              </DisclosurePanel>
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
