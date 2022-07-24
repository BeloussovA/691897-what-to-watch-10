import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className='error-page'>
      <h1 className='error-page__heading'>
        404
      </h1>
      <p className='error-page__text'>Page not found</p>
      <Link to="/">Go to main page</Link>
    </div>
  );
}

export default NotFoundScreen;
