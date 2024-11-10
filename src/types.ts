export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type City = {
    name: string;
    location: Location;
};

export type Point = {
    title: string;
    lat: number;
    lng: number;
};

export type Points = Point[];

export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    previewImage: string;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
};

export type Host = {
    isPro: boolean;
    name: string;
    avatarUrl: string;
};

export type OfferDetails = {
    id: string;
    title: string;
    description: string;
    type: string;
    price: number;
    images: string[];
    city: City;
    location: Location;
    goods: string[];
    host: Host;
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    bedrooms: number;
    maxAdults: number;
};
