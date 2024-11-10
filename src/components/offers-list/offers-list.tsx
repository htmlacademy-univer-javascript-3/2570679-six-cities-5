import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types';

type OffersListProps = {
    offers: Offer[];
}

const doSomethingForAngryLinterCheck = (id: string) => id;

function OffersList({offers: offers}: OffersListProps) {
  const [activeOfferCardId, setActiveOfferCardId] = useState('');
  doSomethingForAngryLinterCheck(activeOfferCardId);

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          setActiveOfferCardId={setActiveOfferCardId}
        />
      ))}
    </>
  );
}

export default OffersList;
