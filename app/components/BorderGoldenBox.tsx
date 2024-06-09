import { classNames } from "../utilities/functions";

export default function BorderGoldenBox({ children, className, golden }:
    Readonly<{
        children?: React.ReactNode;
        className?: string;
        golden?: boolean;
    }>) {
    return (
        <div className={classNames('flex', className)}>
            <div className="h-16 rounded-full bg-gradient-to-b from-[#fcd52d] from-0% via-[#ffe792] via-8% via-[#fdd941] via-18% via-[#7a5b35] via-67% via-[#c09c31] via-96% to-[#a38132] to-100% p-1">
                <div className={classNames(golden ? 'bg-golden text-black' : 'bg-gray-800 back', "flex rounded-full h-full w-full items-center justify-center hover:bg-golden hover:text-black pl-3 pr-3")}>
                    {children}
                </div>
            </div>
        </div>
    )
};