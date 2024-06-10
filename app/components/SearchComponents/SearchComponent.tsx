'use client';

import { searchMultipleParam, searchSingularParam } from "../../utilities/functions";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import SearchTemplateComponent from "./SearchTemplateComponent";
import { UrlSearchParams } from "@/app/utilities/types";

export default function SearchComponent({
    searchParams,
}: Readonly<{
    searchParams: UrlSearchParams;
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
    const handleFilterClick = () => setFilters((prev) => !prev);
    const closeModal = () => setMobileModal(false);
    const handleMultiple = (type: string, value: string) => searchMultipleParam({
        type,
        value,
        callback: closeModal,
        searchParams,
        router,
    })
    const handleSingular = (type: string, value: string) => searchSingularParam({
        type,
        value,
        callback: closeModal,
        searchParams,
        router,
    })
    return (
        <SearchTemplateComponent
            mobileModal={mobileModal}
            filters={filters}
            close={close}
            manaArray={manaArray}
            handleFilterClick={handleFilterClick}
            handleMultiple={handleMultiple}
            handleSingular={handleSingular}
            setMobileModal={setMobileModal}
        />
    );
};