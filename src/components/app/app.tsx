import MainPage from '../main-page/main-page';
import { PlaceCardProps } from '../place-card/place-card';

type AppProps = {
    placeCardsProps: PlaceCardProps[];
}

function App({placeCardsProps} : AppProps) : JSX.Element {
  return (
    <MainPage placeCardsProps={placeCardsProps}/>
  );
}

export default App;
