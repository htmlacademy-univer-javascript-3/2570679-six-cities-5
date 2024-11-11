import { OfferDetails } from '../../types';
import { Navigate, useLocation } from 'react-router-dom';
import OfferGallery from '../offer-gallery/offer-gallery';
import OfferGoods from '../offer-goods/offer-goods';
import ReviewForm from '../review-form/review-form';
import capitalizeFirstLetter from '../../helpers/capitalize-first-letter';
import { AppRoute } from '../../enums';
import OffersList from '../offers-list/offers-list';
import { ReviewsMock } from '../../mocks/reviews';
import { NearPlacesMock } from '../../mocks/near-places';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';


type OfferPageProps = {
  offersDetails: OfferDetails[];
};

function OfferPage({ offersDetails: offers }: OfferPageProps) {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const offerId = pathParts[pathParts.length - 1];
  const currentOffer = offers.findLast((x) => x.id === offerId);

  if (currentOffer === undefined) {
    return <Navigate to={AppRoute.NotFoundPage} replace />;
  }

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          {<OfferGallery imagesSources={currentOffer?.images} />}
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                currentOffer.isPremium ?
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div> : <div></div>
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${20 * currentOffer.rating}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(currentOffer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              {<OfferGoods goods={currentOffer.goods} />}
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  {
                    currentOffer.host.isPro ?
                      <div className="offer__user-status">
                        <span>Pro</span>
                      </div> : <div></div>
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                {<ReviewsList reviews={ReviewsMock}/>}
                {<ReviewForm />}
              </section>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {<OffersList offers={NearPlacesMock}/>}
            </div>
          </section>
        </div>
        <Map city={NearPlacesMock[0].city}
          points={NearPlacesMock.map((offer) => ({
            title: offer.title,
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }))}
          selectedPoint={undefined}
          block={'offer__map'}
        />
      </main>
    </div>
  );
}

export default OfferPage;
