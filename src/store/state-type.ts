import { AuthorizationStatus, SortingOption } from '../enums';
import { City, Offer, OfferDetails, Review, UserData } from '../types';

export type State = {
    city: City;
    offers: Offer[];
    sortingOption: SortingOption;
    authorizationStatus: AuthorizationStatus;
    isOffersDataLoading: boolean;
    userData: UserData | undefined;
    offerDetails: OfferDetails | undefined;
    nearOffers: Offer[];
    offerComments: Review[];
};
