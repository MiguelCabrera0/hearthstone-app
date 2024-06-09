'use client';

import { classNames } from "../utilities/functions";
import { cardTypes, keywords, minionTypes, rarities, sortTypes } from "../utilities/constants";
import Image from "next/image";
import BorderGoldenBox from "../components/BorderGoldenBox";
import FilterIcon from "@/public/assets/filter icon white.svg"
import React, { useMemo, useState } from "react";
import SelectComponent from "../components/SelectComponent";
import { useRouter } from "next/navigation";
import MobileModal from "../components/MobileModal";

export default function SearchComponent({
    page,
    pages,
    searchParams,
}: Readonly<{
    page: number,
    pages: number[],
    searchParams: { [key: string]: string | string[] | undefined }
}>) {
    const router = useRouter();
    const [mobileModal, setMobileModal] = useState(false);
    const [filters, setFilters] = useState(false);
    const close = () => setMobileModal(false);
    const manaArray = useMemo(() => {
        const x = new Array(10).fill(null).map((_, idx) => ({ slug: String(idx), name: String(idx) }));
        x.push({ slug: new Array(21).fill(null).map((_, idx) => idx + 10).join(), name: "10+" })
        return x;
    }, []);
    const attackArray = useMemo(() => new Array(21)
        .fill(false)
        .map((_, idx) => ({ selected: false, slug: idx, name: String(idx) })), []);
    const healthArray = useMemo(() => new Array(21)
        .fill(false)
        .map((_, idx) => ({ selected: false, slug: idx, name: String(idx) })), []);
    const handleFilterClick = () => setFilters((prev) => !prev);
    const handleMultiple = (type: string, value: string) => {
        if (searchParams[type]) {
            const prevValues = String(searchParams[type]).split(',');
            if (!prevValues.some((x) => x === value)) {
                prevValues.push(value);
                handleSingular(type, prevValues.join(','));
            }
        } else {
            handleSingular(type, value);
        }
    }
    const handleSingular = (type: string, value: number | string) => {
        const newParams = { ...searchParams };
        newParams[type] = String(value);
        const x = Object
            .entries(newParams)
            .map(([key, val]) => `${key}=${String(val).replaceAll('\n', '')}`)
            .join('&');
        setMobileModal(false);
        router.replace(`search?${x}`, { scroll: false });
    }
    return (
        <div className="flex justify-center">
            <div className="items-center justify-evenly w-full hidden lg:flex md:block">
                <div className="flex justify-center items-center w-1/2 md:w-full">
                    <span className="Mana flex items-center select-none">
                        Mana
                    </span>
                    <BorderGoldenBox>
                        {manaArray.map((item) => (
                            <button
                                key={`mana-${item.slug}`}
                                className="mx-4 text-lg drop-shadow-lg"
                                onClick={() => handleSingular('manaCost', item.slug)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </BorderGoldenBox>
                </div>
                <div className="flex justify-center items-center w-1/2 md:w-full">
                    <div className="flex items-center">
                        <label htmlFor="sort-by" className="mr-2">
                            SORT BY:
                        </label>
                        <BorderGoldenBox>
                            <SelectComponent
                                id="sort"
                                options={sortTypes}
                                placeholder="Sort Type"
                                onChange={(slug) => handleSingular('sort', slug)}
                            />
                        </BorderGoldenBox>
                    </div>
                    <button onClick={handleFilterClick} className="bg-transparent ml-3">
                        <BorderGoldenBox golden={filters}>
                            <Image
                                className="ml-6 mr-2 color-black"
                                src={FilterIcon}
                                alt=""
                                width={30}
                                height={32}
                            />
                            <span className="mr-6">Filters</span>
                        </BorderGoldenBox>
                    </button>
                </div>
            </div>
            <button
                className="md:hidden"
                onClick={() => setMobileModal(true)}
            >
                <BorderGoldenBox>
                    Hello There
                </BorderGoldenBox>
            </button>
            <MobileModal open={mobileModal} close={close} className="flex flex-col space-y-4 ml-2">
                <span className="Mana flex items-center select-none -mb-6">
                    Mana
                </span>
                <BorderGoldenBox>
                    <SelectComponent
                        id="mana"
                        options={manaArray}
                        placeholder="Mana"
                        onChange={(value) => handleSingular('manaCost', String(value))}
                    />
                </BorderGoldenBox>
                <span>
                    SORT BY:
                </span>
                <BorderGoldenBox>
                    <SelectComponent
                        id="sort"
                        options={sortTypes}
                        placeholder="Sort Type"
                        onChange={(slug) => handleSingular('sort', slug)}
                    />
                </BorderGoldenBox>
                <button onClick={handleFilterClick} className="bg-transparent">
                    <BorderGoldenBox golden={filters}>
                        <Image
                            className="ml-6 mr-2 color-black"
                            src={FilterIcon}
                            alt=""
                            width={30}
                            height={32}
                        />
                        <span className="mr-6">Filters</span>
                    </BorderGoldenBox>
                </button>
                {filters && (
                    <div className="flex flex-col space-y-4">
                        <BorderGoldenBox className="mx-2">
                            <SelectComponent
                                id="attack"
                                options={attackArray}
                                placeholder="Attack"
                                onChange={(value) => handleMultiple('attack', String(value))}
                            />
                        </BorderGoldenBox>
                        <BorderGoldenBox className="mx-2">
                            <SelectComponent
                                id="health"
                                options={healthArray}
                                placeholder="Health"
                                onChange={(value) => handleMultiple('health', String(value))}
                            />
                        </BorderGoldenBox>
                        <BorderGoldenBox className="mx-2">
                            <SelectComponent
                                id="card-type"
                                placeholder="Card Type"
                                options={cardTypes}
                                onChange={(value) => handleSingular('type', value)}
                            />
                        </BorderGoldenBox>
                        <BorderGoldenBox className="mx-2">
                            <SelectComponent
                                id="minion-type"
                                placeholder="Minion Type"
                                options={minionTypes}
                                onChange={(value) => handleSingular('minionType', value)}
                            />
                        </BorderGoldenBox>
                        <BorderGoldenBox className="mx-2">
                            <SelectComponent
                                id="rarity"
                                placeholder="Rarity"
                                options={rarities}
                                onChange={(value) => handleSingular('rarity', value)}
                            />
                        </BorderGoldenBox>
                        <BorderGoldenBox className="mx-2">
                            <SelectComponent
                                id="keywords"
                                placeholder="Keywords"
                                options={keywords}
                                onChange={(value) => handleSingular('keyword', value)}
                            />
                        </BorderGoldenBox>
                    </div>
                )}
            </MobileModal>
            {filters && (
                <div>
                    <div className="hidden flex items-center mx-auto justify-evenly w-full mt-5">
                        <div className="flex items-center">
                            <BorderGoldenBox className="mx-2">
                                <SelectComponent
                                    id="attack"
                                    options={attackArray}
                                    placeholder="Attack"
                                    onChange={(value) => handleMultiple('attack', String(value))}
                                />
                            </BorderGoldenBox>
                            <BorderGoldenBox className="mx-2">
                                <SelectComponent
                                    id="health"
                                    options={healthArray}
                                    placeholder="Health"
                                    onChange={(value) => handleMultiple('health', String(value))}
                                />
                            </BorderGoldenBox>
                            <BorderGoldenBox className="mx-2">
                                <SelectComponent
                                    id="card-type"
                                    placeholder="Card Type"
                                    options={cardTypes}
                                    onChange={(value) => handleSingular('type', value)}
                                />
                            </BorderGoldenBox>
                            <BorderGoldenBox className="mx-2">
                                <SelectComponent
                                    id="minion-type"
                                    placeholder="Minion Type"
                                    options={minionTypes}
                                    onChange={(value) => handleSingular('minionType', value)}
                                />
                            </BorderGoldenBox>
                            <BorderGoldenBox className="mx-2">
                                <SelectComponent
                                    id="rarity"
                                    placeholder="Rarity"
                                    options={rarities}
                                    onChange={(value) => handleSingular('rarity', value)}
                                />
                            </BorderGoldenBox>
                            <BorderGoldenBox className="mx-2">
                                <SelectComponent
                                    id="keywords"
                                    placeholder="Keywords"
                                    options={keywords}
                                    onChange={(value) => handleSingular('keyword', value)}
                                />
                            </BorderGoldenBox>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};