'use client'

import { classNames } from "../utilities/functions";
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function MobileModal({ children, open, close, className }: Readonly<{
    children?: React.ReactNode;
    open: boolean,
    close: () => void,
    className?: string,
}>) {
    return (
        <div className="sm:hidden">
            {open && (
                <div className={classNames(
                    "absolute inset-y-0 right-0 z-40",
                    "bg-[#313f63] opacity-95",
                    "top-0 bottom-0 right-0 left-0",
                    "overflow-auto",
                )}>
                    <div className="flex justify-end mt-3 mr-3">
                        <button
                            onClick={() => close()}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="top-0 right-0 block h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="relative h-[90%]">
                        <div className={className}>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}