import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/const';
import FilmCard from '../../components/film-card/film-card';
import Header from '../../components/header/header';
import { PromoFilmType, filmType } from '../../types/type';

type Props = {
  filmSetting: PromoFilmType,
  filmsData: filmType[]
};

function MainPage({filmSetting, filmsData}: Props): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<string | null>(null);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmSetting.filmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmSetting.genre}</span>
                <span className="film-card__year">{filmSetting.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <Link to="#" className="catalog__genres-link">
                All genres
              </Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">
                Comedies
              </Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">
                Crime
              </Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">
                Documentary
              </Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">
                Dramas
              </Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">
                Horror
              </Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">
                Kids & Family
              </Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">
                Romance
              </Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">
                Sci-Fi
              </Link>
            </li>
            <li className="catalog__genres-item">
              <Link to="#" className="catalog__genres-link">
                Thrillers
              </Link>
            </li>
          </ul>

          <div className="catalog__films-list">
            {filmsData.map((film) => <FilmCard key = {film.id} film = {film} setActiveFilm={setActiveFilm}/>)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link className="logo__link logo__link--light" to={AppRoute.Main}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
