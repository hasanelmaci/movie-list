import React from "react";
import { useState } from "react";

const DataFetch = ({ movie }) => {
  const [searchMovie, setSearchMovie] = useState("wars");

  const handleChange = (e) => {
    setSearchMovie(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} />
      {console.log({ movie })}
    </div>
  );
};

export async function getStaticProps() {
    const key = process.env.REACT_APP_OMDB_KEY
  const res = await fetch(
    `http://www.omdbapi.com/?s=lord&type=movie&apikey=${key}`
  );
  const movie = await res.json();
  return {
    props: {
      movie,
    },
  };
}

export default DataFetch;
