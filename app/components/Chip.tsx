import { ReactNode } from "react";
import { classNames } from "../utilities/functions"
import { XMarkIcon } from "@heroicons/react/16/solid";

type ChipParams = Readonly<{
    className?: string;
    color?: string;
    children?: ReactNode;
    onDelete?: () => void;
}>

export default function Chip({
    className,
    color,
    children,
    onDelete,
}: ChipParams) {
    return (
        <div className={classNames(
            color ? `bg-${color}` : 'bg-golden',
            "flex flex-wrap justify-center align-center items-center w-fit",
            "pt-1 pb-1 pl-4",
            onDelete ? "pr-2" : "pr-4",
            "rounded-full",
            "text-sm text-black",
            className,
        )}>
            {children}
            {onDelete && (
                <button onClick={onDelete} className="ml-1">
                    <XMarkIcon width={20} color="black" />
                </button>
            )}
        </div>
    );
};