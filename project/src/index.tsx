import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FilmSetting, FilmsData } from './utils/utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      id={FilmSetting.id}
      filmTitle = {FilmSetting.filmTitle}
      genre = {FilmSetting.genre}
      releaseDate = {FilmSetting.releaseDate}
      filmsData = {FilmsData}
    />
  </React.StrictMode>,
);
