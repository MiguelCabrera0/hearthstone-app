'use client';
import { searchSingularParam } from "@/app/utilities/functions";
import { UrlSearchParams } from "@/app/utilities/types";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import Chip from "../Chip";
import { searchParamAbbreviations } from "@/app/utilities/constants";

export default function SearchParamView({
    searchParams,
}: Readonly<{
    searchParams: UrlSearchParams
}>) {
    const router = useRouter();
    const deleteSearch = () => searchSingularParam({
        router,
        searchParams,
        type: 'textFilter',
        value: "",
    });
    const { textFilter = "" } = searchParams;
    const newSearchParams = useMemo(() => {
        const newParams = { ...searchParams };
        delete newParams.textFilter;
        delete newParams.page;
        delete newParams.sort;
        return Object.entries(newParams).flatMap(([key, val]) => {
            if (key === 'manaCost' && val === "10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30") {
                return {
                    slug: 'manaCost',
                    name: `${searchParamAbbreviations[key]} 10+`,
                    value: val,
                }
            }
            const x = String(val).split(',').map((v) => ({
                name: `${searchParamAbbreviations[key]} ${v}`,
                slug: key,
                value: v,
            }));
            return x
        });
    }, [searchParams]);
    const onDeleteParam = (data: { slug: string, value: string }) => {
        const newParams = { ...searchParams };
        if (newParams[data.slug]) {
            if (data.slug === "manaCost") {
                delete newParams.manaCost;
            } else {
                const temp = String(newParams[data.slug]).split(',');
                const idx = temp.findIndex((x) => x === data.value);
                temp.splice(idx, 1);
                if (!temp.length) {
                    delete newParams[data.slug];
                } else {
                    newParams[data.slug] = temp.join(',')
                }
            }
        }
        const params = new URLSearchParams();
        Object
            .entries(newParams)
            .forEach(([key, val]) => {
                params.set(key, String(val));
            });
        router.replace("search?" + params, { scroll: false });
    };
    const clearAll = () => {
        const newParams = {
            textFilter: searchParams.textFilter,
            page: searchParams.page,
        };
        const params = new URLSearchParams();
        Object
            .entries(newParams)
            .forEach(([key, val]) => {
                params.set(key, String(val));
            });
        router.replace("search?" + params, { scroll: false });
    }
    return (
        <div>
            <button className="mt-4 underline" onClick={clearAll}>
                Clear All
            </button>
            <div className="block md:flex md:flex-wrap md:ml-24 my-8 space-x-2 space-y-2">
                <h1 className="text-2xl">
                    Results for: "{searchParams.textFilter}"
                </h1>
                {textFilter && (<button onClick={deleteSearch}>
                    <XCircleIcon width={20} color="#fcd52d" />
                </button>)}
                {newSearchParams.map((item) => (
                    <Chip onDelete={() => onDeleteParam(item)}>
                        {item.name}
                    </Chip>
                ))}
            </div>
        </div>
    );
};