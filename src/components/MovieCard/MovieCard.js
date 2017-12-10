import React from "react";
import classes from "./MovieCard.css";
import FaPlay from "react-icons/lib/fa/play";

const movieCard = props => {
  return (
    <div className={classes.gallery}>
      <a href="#1" className={classes.imgLink}>
        <img
          src={"https://image.tmdb.org/t/p/w300/" + props.poster_path}
          alt={props.title}
          className={classes.img}
        />
        <div className={classes.coverBg} />
        <p className={classes.coverTitle}>
          <FaPlay size={42} />
        </p>
        <div className={classes.Text}>
          {" "}
          <span>{props.title}</span>{" "}
        </div>
        <div className={classes.TextHD}>
          {" "}
          <span>HD</span>{" "}
        </div>
      </a>
    </div>
  );
};

export default movieCard;
