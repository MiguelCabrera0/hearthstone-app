import { sortTypes } from "../../utilities/constants";
import Image from "next/image";
import BorderGoldenBox from "../BorderGoldenBox";
import FilterIcon from "@/public/assets/filter icon white.svg"
import React from "react";
import SelectComponent from "../SelectComponent";
import FilterComponent from "./FilterComponent";
import { UrlSearchParams } from "@/app/utilities/types";
import MobileFilterComponent from "./MobileFilterComponent";

export default function SearchTemplateComponent({
    mobileModal,
    filters,
    close,
    manaArray,
    handleFilterClick,
    setMobileModal,
    handleMultiple,
    handleSingular,
    searchParams,
}: Readonly<{
    mobileModal: boolean;
    filters: boolean;
    close: () => void;
    manaArray: { slug: string; name: string; }[];
    handleFilterClick: () => void;
    setMobileModal: (val: boolean) => void;
    handleMultiple: (type: string, value: string) => void;
    handleSingular: (type: string, value: string) => void;
    searchParams: UrlSearchParams,
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
                                    onClick={() => handleSingular('manaCost', item.slug)}
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
                <MobileFilterComponent
                    mobileModal={mobileModal}
                    filters={filters}
                    close={close}
                    manaArray={manaArray}
                    handleFilterClick={handleFilterClick}
                    setMobileModal={setMobileModal}
                    handleMultiple={handleMultiple}
                    handleSingular={handleSingular}
                    searchParams={searchParams}
                />
            </div>
            {filters && (
                <div className="hidden md:grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3">
                    <FilterComponent handleMultiple={handleMultiple} handleSingular={handleSingular} />
                </div>
            )}
        </div>
    );
};
