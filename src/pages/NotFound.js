import React from 'react';
import { Link } from 'react-router-dom';

import './styles/error.css';
import MainNav from '../components/MainNav';

class NotFound extends React.Component {
  state = {};
  render() {
    return (
      <div className="container-home">
        <div className="content-error">
          <div className="error">
            <h1>Error 404</h1>
            <p>The content you're searching is not available</p>
            <Link to="/" className="btn btn-outline-secondary no-radius">
              {' '}
              Back Home{' '}
            </Link>
          </div>
        </div>
        <MainNav gray="gray" />
      </div>
    );
  }
}

export default NotFound;
