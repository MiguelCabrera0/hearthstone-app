'use client';

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { classData } from "@/app/utilities/constants";
import BorderGoldenBox from "@/app/components/BorderGoldenBox";
import SelectComponent from "@/app/components/SelectComponent";

export default function HearthClasses() {
    const { slug }: {
        slug: "mage" | "druid" | "hunter" | "priest" | "rougue" | "paladin" | "shaman" | "demon-hunter" | "warlock" | "warrior";
    } = useParams();
    const router = useRouter();
    const { name, src, title, desc, icon } = classData[slug];
    const handleChangeClass = (slug: string | number) => { 
        router.push(`/classes/${slug}`);
    };
    return (
        <div className="w-full flex justify-center flex-col items-center">
            <Image
                className="-z-10 fixed h-full overflow-x-hidden md:w-full md:h-auto top-0"
                src={src}
                alt=""
            />
            <div className="flex flex-col md:flex-row w-full md:justify-between p-8">
                <div className="flex items-center text-center">
                    <Image
                        src={icon}
                        alt={name}
                        width={108}
                        height={108}
                        className="md:w-[266px] md:h-[266px]"
                    />
                    <span className="text-3xl drop-shadow-md small-text-stroke md:big-text-stroke md:text-7xl tracking-tighter">
                        {name}
                    </span>
                </div>
                <BorderGoldenBox golden>
                    <SelectComponent
                        id="class"
                        placeholder="Classes"
                        options={Object.entries(classData).map(([key, val]) => ({
                            name: val.name,
                            slug: key,
                        }))}
                        value={slug}
                        onChange={handleChangeClass}
                    />
                </BorderGoldenBox>
            </div>
            <div className="flex w-4/5 text-center flex-col mb-10">
                <h1 className="class-title">
                    {title}
                </h1>
                <p className="class-desc">
                    {desc}
                </p>
            </div>
        </div>
    );
};
