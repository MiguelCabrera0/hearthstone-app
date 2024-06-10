'use client';
import Image from "next/image";
import homePageLogo from "@/public/assets/homepage_logo 1@3x.png";
import search from "@/public/assets/Search@3x.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { classData } from "./utilities/constants";
import { classNames } from "./utilities/functions";

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
