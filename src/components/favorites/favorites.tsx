import { useSelector } from 'react-redux';
import { Offer } from '../../types';
import OffersList from '../offers-list/offers-list';
import { RootState } from '../..';
import { Link } from 'react-router-dom';


function FavoritesPage() {
  const favoritesOffers = useSelector((state: RootState) => state.favoritesOffers.favoriteOffers);
  const offersByCity = favoritesOffers.reduce((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }
    acc[offer.city.name].push(offer);
    return acc;
  }, {} as Record<string, Offer[]>);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(offersByCity).map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to='/'>
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OffersList offers={offersByCity[city]} setActiveOfferCardId={() => {}} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FavoritesPage;
