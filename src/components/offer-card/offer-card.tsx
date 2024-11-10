import { Offer } from '../../types';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../enums';
import capitalizeFirstLetter from '../../helpers/capitalize-first-letter';

type OfferCardProps = {
  offer: Offer;
  setActiveOfferCardId: React.Dispatch<React.SetStateAction<string>>;
}

const GetStyleParameters = (pathName: string) => {
  const styleParametersForRootPage = {
    block: 'cities',
    imageWidth: '260',
    imageHeight: '200'
  };
  const styleParametersForFavoritesPage = {
    block: 'favorites',
    imageWidth: '150',
    imageHeight: '100'
  };
  const defaultStyleParameters = {
    block: 'default',
    imageWidth: '200',
    imageHeight: '200'
  };

  switch(pathName) {
    case `${AppRoute.Root}`:
      return styleParametersForRootPage;
    case `${AppRoute.Favorites}`:
      return styleParametersForFavoritesPage;
    default:
      return defaultStyleParameters;
  }
};

function OfferCard({offer: offer, setActiveOfferCardId: setActivePlaceCardId}: OfferCardProps) {
  const location = useLocation();
  const { id, price, previewImage, title, rating, isPremium, type } = offer;
  const { block, imageWidth, imageHeight } = GetStyleParameters(location.pathname);

  const handleMouseEnter = () => {
    setActivePlaceCardId(id);
  };

  const handleMouseLeave = () => {
    setActivePlaceCardId('');
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <article className={`${block}__card place-card`}>
        {
          isPremium ?
            <div className="place-card__mark">
              <span>Premium</span>
            </div> : <div></div>
        }
        <div className={`${block}__image-wrapper place-card__image-wrapper`}>
          <Link to={`/offer/${id}`}>
            <img className="place-card__image" src={`${previewImage}`} width={imageWidth} height={imageHeight} alt="Place image"/>
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${20 * rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
        </div>
      </article>
    </div>
  );
}

export default OfferCard;
