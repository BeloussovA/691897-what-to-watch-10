import MainPage from '../../pages/main-page/main-page';
// import SignIn from '../../pages/login/login';
// import MyList from '../../pages/my-list/my-list';
// import Film from '../../pages/film/film';
// import AddReview from '../../pages/add-review/add-review';
// import Player from '../../pages/player/player';
import {PromoFilmType} from '../../types/type';

function App({id, filmTitle, genre, releaseDate, filmsData}: PromoFilmType) : JSX.Element {
  return (
    <MainPage
      id={id}
      filmTitle={filmTitle}
      genre={genre}
      releaseDate={releaseDate}
      filmsData={filmsData}
    />
    // <
    //   SignIn />
    // <
    //   MyList />
    // <
    //   Film />
    // <
    //   AddReview />
    // <
    //   Player />
  );
}

export default App;
