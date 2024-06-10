'use client'
import { sortTypes } from "../../utilities/constants";
import Image from "next/image";
import BorderGoldenBox from "../BorderGoldenBox";
import FilterIcon from "@/public/assets/filter icon white.svg"
import React from "react";
import SelectComponent from "../SelectComponent";
import MobileModal from "../MobileModal";
import FilterComponent from "./FilterComponent";

export default function SearchTemplateComponent({
    mobileModal,
    filters,
    close,
    manaArray,
    handleFilterClick,
    setMobileModal,
    handleMultiple,
    handleSingular,
}: Readonly<{
    mobileModal: boolean;
    filters: boolean;
    close: () => void;
    manaArray: { slug: string; name: string; }[];
    handleFilterClick: () => void;
    setMobileModal: (val: boolean) => void;
    handleMultiple: (type: string, value: string) => void;
    handleSingular: (type: string, value: string) => void;
}>) {
    return (
        <div>
            <div className="flex justify-center">
                <div className="items-center justify-evenly w-full hidden lg:flex md:block">
                    <div className="flex justify-center items-center w-1/2 md:w-full mb-4">
                        <span className="Mana flex items-center select-none">
                            Mana
                        </span>
                        <BorderGoldenBox>
                            {manaArray.map((item) => (
                                <button
                                    key={`mana-${item.slug}`}
                                    className="mx-4 text-lg drop-shadow-lg"
                                    onClick={() => handleMultiple('manaCost', item.slug)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </BorderGoldenBox>
                    </div>
                    <div className="flex justify-center items-center w-1/2 md:w-full mb-4">
                        <div className="flex items-center">
                            <label htmlFor="sort-by" className="mr-2">
                                SORT BY:
                            </label>
                            <BorderGoldenBox>
                                <SelectComponent
                                    id="sort"
                                    options={sortTypes}
                                    placeholder="Sort Type"
                                    onChange={(slug) => handleSingular('sort', String(slug))}
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
                        Manage filters
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
                            onChange={(value) => handleMultiple('manaCost', String(value))}
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
                            onChange={(slug) => handleSingular('sort', String(slug))}
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
                            <FilterComponent handleMultiple={handleMultiple} handleSingular={handleSingular} />
                        </div>
                    )}
                </MobileModal>
            </div>
            {filters && (
                <div className="hidden md:grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3">
                    <FilterComponent handleMultiple={handleMultiple} handleSingular={handleSingular} />
                </div>
            )}
        </div>
    );
};
