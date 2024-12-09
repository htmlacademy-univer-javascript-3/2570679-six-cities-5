import { SortingOption } from '../enums';
import { City, Offer } from '../types';

export type State = {
    city: City;
    offers: Offer[];
    sortingOption: SortingOption;
};
