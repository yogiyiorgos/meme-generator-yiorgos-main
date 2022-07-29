import React, { useState, useEffect } from 'react';
import memesData from '../memesData.js';

function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function getMemeImage() {
    // const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className='form-container'>
        <input
          type='text'
          placeholder='Top text'
          className='form-input'
          name='topText'
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type='text'
          placeholder='Bottom text'
          className='form-input'
          name='bottomText'
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button onClick={getMemeImage} className='form-button'>
          Get a new meme image 🤖
        </button>
      </div>
      <div className='meme'>
        <img
          src={meme.randomImage}
          alt='Randomly generated meme'
          className='meme-image'
        />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
export default Meme;
