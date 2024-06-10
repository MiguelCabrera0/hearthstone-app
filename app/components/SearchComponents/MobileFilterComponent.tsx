import Image from "next/image";
import BorderGoldenBox from "../BorderGoldenBox";
import MobileModal from "../MobileModal";
import SelectComponent from "../SelectComponent";
import SearchParamView from "./SearchParamView";
import FilterComponent from "./FilterComponent";
import { UrlSearchParams } from "@/app/utilities/types";
import { sortTypes } from "@/app/utilities/constants";
import FilterIcon from "@/public/assets/filter icon white.svg"

export default function MobileFilterComponent({
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
        <>
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
                <SearchParamView
                    searchParams={searchParams}
                />
            </MobileModal>
        </>
    )
}