import React from 'react';

import './styles/home.css';
import Header from '../components/Header';
import MainNav from '../components/MainNav';

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div className="container-home">
        <div className="content-home responsive-fw">
          <Header />
        </div>
        <MainNav />
      </div>
    );
  }
}

export default Home;
