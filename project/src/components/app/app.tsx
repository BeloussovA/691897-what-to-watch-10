import MainPage from '../../pages/main-page/main-page';
// import SignIn from '../../pages/login/login';
// import MyList from '../../pages/my-list/my-list';
// import Film from '../../pages/film/film';
// import AddReview from '../../pages/add-review/add-review';
// import Player from '../../pages/player/player';
import { FilmSetting, FilmsData } from '../../utils/utils';

function App() : JSX.Element {
  return (
    <MainPage
      filmSetting={FilmSetting}
      filmsData={FilmsData}
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
