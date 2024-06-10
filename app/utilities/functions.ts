import { cardTypes, client, rarities, secret, sets } from "./constants";
import { Card, CardSearchResult, SearchParams } from "./types";

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
        next: { revalidate: 86399 },
    }).then((res) => res.json());
    return access_token;
});

export function classNames(...classes: (string | null | undefined)[]) {
    return classes.filter(Boolean).join(' ')
};

export async function searchCards(accessToken: string, searchParams: { [key: string]: string | string[] | undefined }) {
    const pageSize = "8";
    const params = new URLSearchParams();
    params.set('pageSize', pageSize);
    params.set('locale', "en_US");
    Object.entries(searchParams)
        .forEach(([key, val]) => params.set(key, String(val).replaceAll('\n', '')));
    const apiUrl = `https://us.api.blizzard.com/hearthstone/cards?${params}`;
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${accessToken}`);
    return fetch(apiUrl, { headers })
        .then(response => {
            return response.json()
        })
        .then((result: CardSearchResult) => ({
            ...result,
            cards: result.cards.map((card) => ({
                ...card,
                cardType: cardTypes.find((item) => item.id === card.cardTypeId)?.name,
                rarity: rarities.find((item) => item.id === card.rarityId)?.name,
                setName: sets.find((item) => item.id === card.cardSetId)?.name,
            }))
        }))
        .catch(error => {
            console.error('Error:', error);
            return { cards: [], page: 0, pageCount: 0, cardCount: 0 };
        });
};

export const searchMultipleParam = ({
    type,
    value,
    callback,
    searchParams,
    router,
}: SearchParams) => {
    if (searchParams[type]) {
        const prevValues = String(searchParams[type]).split(',');
        if (!prevValues.some((x) => x === value)) {
            prevValues.push(value);
            searchSingularParam({ type, value: prevValues.join(','), callback, searchParams, router });
        }
    } else {
        searchSingularParam({ type, value, callback, searchParams, router });
    }
}
export function searchSingularParam({
    type,
    value,
    callback,
    searchParams,
    router,
}: SearchParams) {
    const newParams = { ...searchParams };
    newParams[type] = String(value);
    const x = Object
        .entries(newParams)
        .map(([key, val]) => `${key}=${String(val).replaceAll('\n', '')}`)
        .join('&');
    callback && callback();
    router.replace(`search?${x}`, { scroll: false });
}
