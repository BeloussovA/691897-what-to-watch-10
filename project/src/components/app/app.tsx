import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import MainPage from '../../pages/main-page/main-page';
import SignIn from '../../pages/login/login';
import NotFoundScreen from '../../pages/not-found-screen/Not-found-screen';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import { FilmSetting, FilmsData } from '../../utils/utils';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list/my-list';

function App() : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage filmSetting={ FilmSetting } filmsData={ FilmsData }/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Films}
        >
          <Route
            path={AppRoute.Film}
            element={<Film />}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReview />}
          />
        </Route>
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path={AppRoute.NotFoundScreen}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
