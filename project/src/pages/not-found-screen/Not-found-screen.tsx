import '../../pages/not-found-screen/style.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../components/const';

function NotFoundScreen(): JSX.Element {
  return (
    <div className='error-page'>
      <h1 className='error-page__heading'>
        404
      </h1>
      <p className='error-page__text'>Page not found</p>
      <Link to={AppRoute.Main}>Go to main page</Link>
    </div>
  );
}

export default NotFoundScreen;
