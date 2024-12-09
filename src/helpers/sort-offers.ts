import { SortingOption } from '../enums';
import { Offer } from '../types';

export function sortOffersByOption(offers: Offer[], option: SortingOption) {
  switch (option) {
    case SortingOption.PriceLowHigh:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortingOption.PriceHighLow:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortingOption.TopRated:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}
