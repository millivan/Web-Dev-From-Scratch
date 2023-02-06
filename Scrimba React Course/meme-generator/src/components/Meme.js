import React, { useState, useEffect } from "react";
import "../styles/Meme.css";

export const Meme = () => {
  const [allMeme, setAllMeme] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const getRandomMemeUrl = () => {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const randomMemeUrl = allMeme[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: randomMemeUrl };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) =>
      res.json().then((data) => {
        setAllMeme(data.data.memes);
      })
    );
  }, []);

  return (
    <main className="Meme--main">
      <div className="Meme--form">
        <input
          className="Meme--top-row"
          placeholder="Top Text"
          type="text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          className="Meme--bottom-row"
          placeholder="Bottom Text"
          type="text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="Meme--new-meme" onClick={getRandomMemeUrl}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="Meme--meme">
        <img src={meme.randomImage} alt="meme" className="Meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};
