import { PlaceCardProps, PlaceType } from '../src/components/place-card/placeTypes';

export const PlaceCards : PlaceCardProps[] = [
  {
    id: 0,
    price: 120,
    description: 'Beautiful &amp; luxurious apartment at great location',
    imageFileName: 'apartment-01.jpg',
    rating: 4,
    isPremium: true,
    type: PlaceType.Apartment,
  },
  {
    id: 1,
    price: 80,
    description: 'Wood and stone place',
    imageFileName: 'room.jpg',
    rating: 4,
    isPremium: false,
    type: PlaceType.Room,
  },
  {
    id: 2,
    price: 132,
    description: 'Canal View Prinsengracht',
    imageFileName: 'apartment-02.jpg',
    rating: 4,
    isPremium: false,
    type: PlaceType.Apartment,
  },
  {
    id: 3,
    price: 180,
    description: 'Charming room in a shared house',
    imageFileName: 'apartment-03.jpg',
    rating: 5,
    isPremium: true,
    type: PlaceType.Apartment,
  }];
