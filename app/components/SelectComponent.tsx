'use client'
import { ChangeEventHandler, FocusEvent, MouseEvent, useState } from "react";
import { SelectOption } from "../utilities/types";
import { classNames } from "../utilities/functions";
import ArrowDown from "@/public/assets/Keyboard arrow down@3x.png";
import Image from "next/image";

export default function SelectComponent({ id, options, placeholder, value, onChange }: Readonly<{
    id: string,
    options: SelectOption[],
    placeholder?: string,
    value?: string | number,
    onChange?: (slug: string | number) => {} | void,
}>) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((prev) => !prev);
    const handleBlur = () => setOpen(false);
    const [selected, setSelected] = useState<SelectOption>(
        options.find((item) => item.slug === value)
        ?? {
            name: placeholder ?? "Select Option",
            slug: "",
        });
    const onSelect = (option: SelectOption) => {
        setOpen(false);
        onChange && onChange(option.slug);
        if (!value) {
            setSelected(option);
        }
    };
    return (
        <button className="relative mx-2 select-none cursor-default" onBlur={handleBlur}>
            <div
                className="flex items-center justify-center"
                onClick={handleOpen}
            >
                <span className="absolute flex items-center justify-between w-full">
                    {selected.name}
                    <Image
                        src={ArrowDown}
                        alt=""
                        width={32}
                        height={32}
                    />
                </span>
                <div className="flex flex-col invisible h-0 overflow-auto">
                    {options.map(item => (
                        <span>{item.name}</span>
                    ))}
                    <div className="w-40" />
                </div>
            </div>
            {open && (
                <div
                    className={classNames(
                        "w-full",
                        "bg-gradient-to-b from-[#fcd52d] from-0% via-[#ffe792] via-8% via-[#fdd941] via-18% via-[#7a5b35] via-67% via-[#c09c31] via-96% to-[#a38132] to-100%",
                        "rounded-md",
                        "p-1",
                        "optionsBox"
                    )}
                >
                    <div
                        className={classNames(
                            "bg-[#3b2203]",
                            "h-full w-full",
                            "flex flex-col",
                            "rounded-md",
                            "items-center",
                            "text-white",
                            "max-h-72",
                            "overflow-auto",
                        )}
                    >
                        {options.map((option) => (
                            <div
                                key={option.slug}
                                className={classNames(
                                    "mt-1 mb-1",
                                    "hover:text-golden",
                                )}
                                onClick={() => onSelect(option)}
                            >
                                {option.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </button>
    );
};