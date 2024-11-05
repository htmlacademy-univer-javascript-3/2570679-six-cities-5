export enum PlaceType {
    Apartment = 'Apartment',
    Room = 'Room'
}

export type PlaceCard = {
    id: number;
    price: number;
    description: string;
    imageFileName: string;
    rating: number;
    isPremium: boolean;
    type: PlaceType;
}
