'use client'

import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { classNames } from "../utilities/functions";
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function MobileModal({ children }: Readonly<{
    children?: React.ReactNode;
}>) {
    return (
        <DisclosurePanel className="sm:hidden">
            <div className={classNames(
                "absolute inset-y-0 right-0 z-40",
                "bg-[#313f63] opacity-95",
                "h-full w-full",
                "flex justify-center items-center flex-col",
                "space-y-20"
            )}>
                {children}
            </div>
            <DisclosureButton className="z-40 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close</span>
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
        </DisclosurePanel>
    );
}