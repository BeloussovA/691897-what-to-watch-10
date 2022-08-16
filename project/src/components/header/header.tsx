import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/const';

type headerProps = {
  children?: ReactNode | ReactNode[];
};

function Header({ children }: headerProps): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.SignIn}>Sign out</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
