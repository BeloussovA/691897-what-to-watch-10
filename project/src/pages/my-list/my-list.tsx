import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/const';
import FilmCard from '../../components/film-card/film-card';
import Header from '../../components/header/header';
import { filmType } from '../../types/type';
type Props = {
  filmsData: filmType[];
};

function MyList({ filmsData }: Props): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<string | null>(null);
  return (
    <div className="user-page">
      <Header>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {filmsData.map((film) => (
            <FilmCard key={film.id} film={film} setActiveFilm={setActiveFilm} />
          ))}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link logo__link--light">
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
  );
}

export default MyList;
