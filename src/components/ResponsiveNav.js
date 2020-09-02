import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './styles/responsivemenu.css';
import burgerMenu from '../img/hamburguer-menu.png';

class MenuRes extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu
        right="true"
        customBurgerIcon={<img src={burgerMenu} alt="burger menu icon" />}>
        <a id="projects" className="menu-item" href="/artworks-list">
          Projects
        </a>
        <a id="bio" className="menu-item" href="/bio">
          Bio
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    );
  }
}

export default MenuRes;
