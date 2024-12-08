import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import { Cities } from '../../mocks/cities';
import { useSelector } from 'react-redux';
import { selectOffersByCity } from '../../store/selectors';
import { State } from '../../store/reducer';


function MainPage() {
  const offers = useSelector(selectOffersByCity);
  const city = useSelector((state: State) => state.city);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList cities={Cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {<OffersList offers={offers} />}
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={city}
                points={offers.map((offer) => ({
                  title: offer.title,
                  lat: offer.location.latitude,
                  lng: offer.location.longitude
                }))}
                selectedPoint={undefined}
                block={'cities__map'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
