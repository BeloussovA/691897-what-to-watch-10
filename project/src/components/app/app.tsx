import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import SignIn from '../../pages/login/login';
import MyList from '../../pages/my-list/my-list';
// import Film from '../../pages/film/film';
// import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import { FilmSetting, FilmsData } from '../../utils/utils';

function App() : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage filmSetting={FilmSetting} filmsData={FilmsData}/>}
        />
        <Route
          path={AppRoute.MyList}
          element={<MyList />}
        />
        {/* <Route
          path={AppRoute.Film}
          element={<GenreQuestionScreen />}
        /> */}
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        {/* <Route
          path={AppRoute.AddReview}
          element={<WinScreen />}
        /> */}
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        {/* <Route
          path="*"
          element={<NotFoundScreen />}
        /> */}
      </Routes>
    </BrowserRouter>
    // <MainPage
    //   filmSetting={FilmSetting}
    //   filmsData={FilmsData}
    // />
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
