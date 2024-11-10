export enum AppRoute {
    Root = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id',
    NonExistent = '*',
    NotFoundPage = '/not-found-page'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
