export enum AppRoute {
    Root = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id',
    NonExistent = '*',
    NotFoundPage = '/not-found-page'
}

export enum APIRoute {
    Offers = '/six-cities/offers',
    Offer = '/six-cities/offers/:offerId',
    OffersNearby = '/six-cities/offers/:offerId/nearby',
    Favorite = '/six-cities/favorite',
    ChangeOfferStatus = '/six-cities/favorite/:offerId/:status',
    Comments = '/six-cities/comments/:offerId',
    Login = '/six-cities/login',
    Logout = '/six-cities/logout',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum SortingOption {
    Popular = 'Popular',
    PriceLowHigh = 'Price: low to high',
    PriceHighLow = 'Price: high to low',
    TopRated = 'Top rated first'
}
