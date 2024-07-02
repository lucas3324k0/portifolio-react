import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <div className='error-container'
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error.status && <p>Status Code: {error.status}</p>}
      {error.statusText && <p>Status Text: {error.statusText}</p>}
      {error.message && <p>Message: {error.message}</p>}
    </div>
  );
};

export default ErrorPage;
