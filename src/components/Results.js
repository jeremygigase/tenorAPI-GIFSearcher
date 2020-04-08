import React from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

export default props => (
  <>
    <h3>{props.search}</h3>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {props.gifs.map(gif => (
        <a href={gif.url} key={gif.id}>
          <img
            src={gif.media[0].gif.url}
            alt={gif.name}
            target="_blank"
            rel="noopener noreferrer"
            id={gif.id}
          />
        </a>
      ))}
    </Masonry>
  </>
);
