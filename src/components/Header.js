import React from 'react';
import trollFace from '../images/troll-face.png';

function Header() {
  return (
    <header className='header-container'>
      <img className='troll-img' src={trollFace} alt='Troll face meme' />
      <h1 className='header-h1'>Meme Generator</h1>
      <h3 className='header-h3'>React - Project 3</h3>
    </header>
  );
}

export default Header;
