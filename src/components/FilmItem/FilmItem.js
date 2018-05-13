import "./FilmItem.css";
import React from "react";

function FilmItem(props) {
  const { imageSrc, title, permaLink } = props;

  return (
    <a href={permaLink} className="component-film-item">
      <div className="item-content">
        <div className="image-and-details">
          <div className="image">
            <img src={imageSrc} alt={title} />
          </div>
        </div>
        <div className="title-container">
          <span className="title">{title}</span>
        </div>
      </div>
    </a>
  );
}

export default FilmItem;
