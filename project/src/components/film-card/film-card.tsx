import { Link } from 'react-router-dom';
import { filmType } from '../../types/type';

type FilmCardProps = {
  film: filmType,
  setActiveFilm(id: string | null): void,
};

function FilmCard({film, setActiveFilm}: FilmCardProps) : JSX.Element {
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => setActiveFilm(String (film.id))}
      onMouseLeave={() => setActiveFilm(String (null))}
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
