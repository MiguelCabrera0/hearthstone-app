'use client';
import Image from "next/image";
import homePageLogo from "@/public/assets/homepage_logo 1@3x.png";
import search from "@/public/assets/Search@3x.png";
import Mage from "@/public/assets/mage emblem@3x.png"
import Druid from "@/public/assets/druid emblem@3x.png"
import Hunter from "@/public/assets/hunter emblem@3x.png"
import Priest from "@/public/assets/priest emblem@3x.png"
import Rougue from "@/public/assets/rouge emblem@3x.png"
import Paladin from "@/public/assets/paladin emblem@3x.png"
import Shaman from "@/public/assets/shaman emblem@3x.png"
import Demon from "@/public/assets/demon hunter emblem@3x.png"
import Warlock from "@/public/assets/warlock emblem@3x.png"
import Warrior from "@/public/assets/warrior emblem@3x.png"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { classData } from "./utilities/constants";
import { classNames } from "./utilities/functions";

const classes = [
  { name: 'Mage', icon: Mage, href: '/classes/mage' },
  { name: 'Druid', icon: Druid, href: '/classes/druid' },
  { name: 'Hunter', icon: Hunter, href: '/classes/hunter' },
  { name: 'Priest', icon: Priest, href: '/classes/priest' },
  { name: 'Rougue', icon: Rougue, href: '/classes/rougue' },
  { name: 'Paladin', icon: Paladin, href: '/classes/paladin' },
  { name: 'Shaman', icon: Shaman, href: '/classes/shaman' },
  { name: 'Demon Hunter', icon: Demon, href: 'classes/demon-hunter' },
  { name: 'Warlock', icon: Warlock, href: '/classes/warlock' },
  { name: 'Warrior', icon: Warrior, href: '/classes/warrior' },
];

export default function Home() {
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`search?textFilter=${e.target.search.value}`);
  };
  return (
    <div className="grid justify-center justify-items-center w-full">
      <Image
        src={homePageLogo}
        width={300}
        height={250}
        className="md:w-[538px]"
        alt="Logo"
      />
      <form
        className={classNames(
          "Rectangle-3",
          "flex align-center align-items-center",
          "space-x-4",
          "md:w-5/6"
        )}
        onSubmit={handleSubmit}
      >
        <button className="-mt-1 ml-1 -mr-1">
          <Image
            src={search}
            width={32}
            height={32}
            alt="search"
          />
        </button>
        <input
          type="text"
          name="search"
          id="search"
          className={classNames(
            "bg-transparent",
            "rounded-md",
            "py-1.5 -mt-1 ",
            "w-44 md:w-full",
            "text-gray-100",
            "sm:text-sm sm:leading-6"
          )}
          placeholder="Search Cards"
        />
        <button className="text-golden opacity-50">
          SEARCH
        </button>
      </form>
      <div className="grid grid-cols-3 md:grid-cols-5 justify-around w-5/6 max-w-fit">
        {Object.entries(classData).map(([_, cl]) => (
          <Link
            className="md:text-2xl flex flex-col text-center items-center md:mb-10 text-golden"
            href={cl.href}
            key={cl.name}
          >
            <Image
              src={cl.icon}
              alt={cl.name}
              height={84}
              width={84}
              className="hover:drop-shadow-class-shadow md:h-[164px] md:w-[164px]"
            />
            {cl.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
