import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import { Cities } from '../../mocks/cities';
import { useSelector } from 'react-redux';
import { selectOffersByCity } from '../../store/selectors';
import { State } from '../../store/state-type';
import SortingOptions from '../sorting-options/sorting-options';
import { sortOffersByOption } from '../../helpers/sort-offers';
import { useState } from 'react';


function MainPage() {
  const sortingOption = useSelector((state: State) => state.sortingOption);
  const offers = sortOffersByOption(useSelector(selectOffersByCity), sortingOption);
  const [activeOfferCardId, setActiveOfferCardId] = useState('');
  const activeOffer = offers.find((x) => x.id === activeOfferCardId);
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
              <SortingOptions/>
              <div className="cities__places-list places__list tabs__content">
                {<OffersList offers={offers} setActiveOfferCardId={setActiveOfferCardId} />}
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={city}
                points={offers.map((offer) => ({
                  title: offer.title,
                  lat: offer.location.latitude,
                  lng: offer.location.longitude
                }))}
                selectedPoint={activeOffer === undefined ? undefined : {
                  title: activeOffer.title,
                  lat: activeOffer.location.latitude,
                  lng: activeOffer.location.longitude
                }}
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
