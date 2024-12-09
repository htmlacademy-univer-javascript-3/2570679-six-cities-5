import { AuthorizationStatus, SortingOption } from '../enums';
import { City, Offer, UserData } from '../types';

export type State = {
    city: City;
    offers: Offer[];
    sortingOption: SortingOption;
    authorizationStatus: AuthorizationStatus;
    isOffersDataLoading: boolean;
    userData: UserData | undefined;
};
