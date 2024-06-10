'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import HomePageLogo from '@/public/assets/homepage_logo 2@3x.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { classNames } from '../utilities/functions';
import MobileModal from './MobileModal';
import { useState } from 'react';

export default function NavBar() {
    const pathName = usePathname();
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    const navigation = [
        { name: 'HOME', href: '/' },
        { name: 'FAVORITES', href: '/favorites' },
        { name: 'SHOPS', href: '/shop' },
    ];
    return (
        <div className="Rectangle-1 mb-4">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-navbar">
                <div className="relative flex h-16 items-center justify-between ">
                    <div className="flex flex-1 items-center justify-start md:justify-center">
                        <Link
                            className="flex flex-shrink-0 items-center ml-2"
                            href="/"
                        >
                            <Image
                                className="h-8 h-auto"
                                src={HomePageLogo}
                                alt="Your Company"
                                width={160}
                                height={76}
                            />
                        </Link>
                        <div className="hidden md:block w-full">
                            <div className="flex justify-center space-x-40">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.href === pathName
                                                ? "text-selected-golden"
                                                : null,
                                            "text-sm leading-6",
                                            "hover:text-selected-golden",
                                        )}
                                        aria-current={item.href === pathName ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex md:hidden items-center">
                        <button
                            onClick={() => setOpen(true)}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
            <MobileModal open={open} close={close} className="flex justify-center items-center flex-col space-y-20 h-full">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={close}
                        className={classNames(
                            item.href === pathName ? "text-selected-golden" : null,
                            'block rounded-md px-3 py-2 text-base text-4xl',
                            "text-3xl underline underline-offset-8",
                            "hover:text-selected-golden",
                        )}
                        aria-current={item.href === pathName ? 'page' : undefined}
                    >
                        {item.name}
                    </Link>
                ))}
            </MobileModal>
        </div>
    )
}