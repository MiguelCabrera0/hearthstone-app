import { useMemo } from "react";
import BorderGoldenBox from "../BorderGoldenBox";
import SelectComponent from "../SelectComponent";
import { cardTypes, keywords, minionTypes, rarities } from "@/app/utilities/constants";

export default function FilterComponent({
    handleMultiple,
    handleSingular,
}: Readonly<{
    handleMultiple: (type: string, slug: string) => void,
    handleSingular: (type: string, slug: string) => void,
}>) {
    const attackArray = useMemo(() => new Array(21)
        .fill(false)
        .map((_, idx) => ({ selected: false, slug: idx, name: `Attack: ${idx}` })), []);
    const healthArray = useMemo(() => new Array(21)
        .fill(false)
        .map((_, idx) => ({ selected: false, slug: idx, name: `Health: ${idx}` })), []);
    return (
        <>
            <BorderGoldenBox>
                <SelectComponent
                    id="attack"
                    options={attackArray}
                    placeholder="Attack"
                    onChange={(value) => handleMultiple('attack', String(value))}
                />
            </BorderGoldenBox>
            <BorderGoldenBox>
                <SelectComponent
                    id="health"
                    options={healthArray}
                    placeholder="Health"
                    onChange={(value) => handleMultiple('health', String(value))}
                />
            </BorderGoldenBox>
            <BorderGoldenBox>
                <SelectComponent
                    id="card-type"
                    placeholder="Card Type"
                    options={cardTypes}
                    onChange={(value) => handleSingular('type', String(value))}
                />
            </BorderGoldenBox>
            <BorderGoldenBox>
                <SelectComponent
                    id="minion-type"
                    placeholder="Minion Type"
                    options={minionTypes}
                    onChange={(value) => handleSingular('minionType', String(value))}
                />
            </BorderGoldenBox>
            <BorderGoldenBox>
                <SelectComponent
                    id="rarity"
                    placeholder="Rarity"
                    options={rarities}
                    onChange={(value) => handleSingular('rarity', String(value))}
                />
            </BorderGoldenBox>
            <BorderGoldenBox>
                <SelectComponent
                    id="keywords"
                    placeholder="Keywords"
                    options={keywords}
                    onChange={(value) => handleSingular('keyword', String(value))}
                />
            </BorderGoldenBox>
        </>
    )
}