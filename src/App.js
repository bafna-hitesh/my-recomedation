import "./styles.css";
import React from "react";
import { useState } from "react";

const myData = {
  Anime: [
    {
      name: "Naruto",
      rating: "9.7/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
    },
    {
      name: "My Hero Acadumy",
      rating: "8.8/10",
      cover:
        "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/SPESite_Key%20Art.png?itok=DVC7Qgz0"
    },
    {
      name: "Black Clover",
      rating: "8.7/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtOTNjZC00ZDU0LWI5ODUtYTRmYzY0MTAzYWZlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name: "Attack On Titans",
      rating: "8.9/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg"
    }
  ],

  Sitcom: [
    {
      name: "Friends",
      rating: "8.6/10",
      cover:
        "https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/3CLEzO37tocxCoSmzzcxwx/2733ae58689b3e59e477a86d2da48a36/friends-showtile.png.2733ae58689b3e59e477a86d2da48a36.jpg?width=1200&height=630"
    },
    {
      name: "The Big Bag Theory",
      rating: "8.4/10",
      cover:
        "https://www.tvguide.com/a/img/catalog/provider/1/1/1-6482810627.jpg"
    },
    {
      name: "Young Sheldon",
      rating: "8.1/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BZDg3MGNhYjItZGU2Yi00MzU4LWE4NGUtYjA2OTVjNGUyMjE4XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg"
    },
    {
      name: "Two & Half Man",
      rating: "8.7/10",
      cover: "https://m.media-amazon.com/images/I/41frU8E8ZrL.jpg"
    }
  ],

  KDrama: [
    {
      name: "Good Doctor",
      rating: "8.5/10",
      cover:
        "https://m.media-amazon.com/images/M/MV5BYjc2NDJiM2EtZTRhMy00NTE1LTg4OTQtOGUwNDc0OGYwNTZiXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_.jpg"
    },
    {
      name: "My ID is Gangnam Beauty",
      rating: "7.9/10",
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/71kqUU5QbqL._RI_.jpg"
    },
    {
      name: "Descendants of the Sun",
      rating: "8.2/10",
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/81O6LvZzlDL._RI_.jpg"
    },
    {
      name: "It's Okay to Not Be Okay",
      rating: "8.4/10",
      cover:
        "https://cdn.i-scmp.com/sites/default/files/styles/1920x1080/public/d8/images/methode/2020/06/12/260885c0-a3e7-11ea-8ea0-d7434be00753_image_hires_171643.jpg?itok=KDG93FCh&v=1591953408"
    }
  ]
};
export default function App() {
  const [selectedCat, setCat] = useState("Anime");
  function handleClickCat(cat) {
    setCat(cat);
    console.log({ cat });
  }

  return (
    <div className="app">
      <div className="heading">
        <h1>My Recommendations </h1>
      </div>
      <div className="btns">
        {Object.keys(myData).map((cat) => (
          <button onClick={() => handleClickCat(cat)}>{cat}</button>
        ))}
      </div>
      <ul className="listitems">
        {myData[selectedCat].map((my) => (
          <li className="card" key={my.name}>
            <img className="img" src={my.cover} alt="cover"></img>
            <div className="description">
              <div className="title">{my.name}</div>
              <div className="rating">
                My Ratings:<strong> {my.rating}</strong>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
