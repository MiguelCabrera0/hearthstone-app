import { UrlSearchParams } from "@/app/utilities/types";

export default function SearchParamView({
    searchParams,
}: Readonly<{
    searchParams: UrlSearchParams
}>) {
    return (
        <div>
            <h1 className="text-2xl ml-28 my-8">
                No results for: "{searchParams.textFilter}"
            </h1>
        </div>
    );
};