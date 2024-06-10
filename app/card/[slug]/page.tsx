import { classNames, getCard, getToken } from "@/app/utilities/functions";
import { Card, UrlSearchParams } from "@/app/utilities/types";
import Image from "next/image";

export default async function CardView({
    params,
}: Readonly<{
    params: UrlSearchParams;
}>) {
    const { slug } = params;
    const token = await getToken();
    const card = await getCard(token, String(slug));
    return (
        <div
            className="flex items-center justify-center flex-col mt-10 md:mt-20"
        >
            <span className="text-3xl drop-shadow-md small-text-stroke md:text-5xl tracking-tighter">
                Mana Bind
            </span>
            <Image
                src={card.image}
                alt={card.name}
                width={204}
                height={284}
                className="md:h-442 md:w-316"
            />
            <div className={classNames(
                "Rectangle-5",
                "relative",
                "text-black",
                "flex flex-col",
                "text-center",
                "justify-center",
                "text-md md:text-lg",
                "p-10 mb-20",
                "w-[280px] min-h-[256px] md:w-[476px] md:min-h-[212px]"
            )}>
                <button className="Ellipse-1">
                    <svg fill="#7a5b35" version="1.1" viewBox="0 0 378.94 378.94">
                        <g>
                            <path d="M348.151,54.514c-19.883-19.884-46.315-30.826-74.435-30.826c-28.124,0-54.559,10.942-74.449,30.826l-9.798,9.8l-9.798-9.8   c-19.884-19.884-46.325-30.826-74.443-30.826c-28.117,0-54.56,10.942-74.442,30.826c-41.049,41.053-41.049,107.848,0,148.885   l147.09,147.091c2.405,2.414,5.399,3.892,8.527,4.461c1.049,0.207,2.104,0.303,3.161,0.303c4.161,0,8.329-1.587,11.498-4.764   l147.09-147.091C389.203,162.362,389.203,95.567,348.151,54.514z M325.155,180.404L189.47,316.091L53.782,180.404   c-28.368-28.364-28.368-74.514,0-102.893c13.741-13.739,32.017-21.296,51.446-21.296c19.431,0,37.702,7.557,51.438,21.296   l21.305,21.312c6.107,6.098,16.897,6.098,23.003,0l21.297-21.312c13.737-13.739,32.009-21.296,51.446-21.296   c19.431,0,37.701,7.557,51.438,21.296C353.526,105.89,353.526,152.039,325.155,180.404z" />
                        </g>
                    </svg>
                </button>
                <span><strong>Type:</strong> {card.cardType}</span>
                <span><strong>Rarity:</strong> {card.rarity}</span>
                <span><strong>Set:</strong> {card.setName}</span>
                <span><strong>Effect:</strong> {card.text}</span>
            </div>
        </div>
    )
};
