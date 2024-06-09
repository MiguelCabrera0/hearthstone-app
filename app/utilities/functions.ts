import { cardTypes, client, rarities, secret, sets } from "./constants";
import { Card, CardSearchResult } from "./types";

export const getToken = (async () => {
    const url = 'https://oauth.battle.net/oauth/token';
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(client + ':' + secret));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');
    const { access_token } = await fetch(url, {
        headers,
        method: 'POST',
        body,
    }).then((res) => res.json());
    return access_token;
});

export function classNames(...classes: (string | null | undefined)[]) {
    return classes.filter(Boolean).join(' ')
};

export async function searchCards(accessToken: string, searchParams: { [key: string]: string | string[] | undefined }) {
    const pageSize = 10;
    const filter = Object
        .entries(searchParams)
        .map(([key, val]) => `${key}=${String(val).replaceAll('\n', '')}`)
        .join('&');
    const apiUrl = `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&${filter}&pageSize=${pageSize}`;
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${accessToken}`);
    return fetch(apiUrl, { headers })
        .then(response => {
            return response.json()
        })
        .then((result: CardSearchResult) => {
            const x = {
                ...result,
                cards: result.cards.map((card) => ({
                    ...card,
                    cardType: cardTypes.find((item) => item.id === card.cardTypeId)?.name,
                    rarity: rarities.find((item) => item.id === card.rarityId)?.name,
                    setName: sets.find((item) => item.id === card.cardSetId)?.name,
                }))
            }
            return x;
        })
        .catch(error => {
            console.error('Error:', error);
            return { cards: [], page: 0, pageCount: 0, cardCount: 0 };
        });
};
