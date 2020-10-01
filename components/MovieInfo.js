import { useEffect, useState } from "react";

function MovieInfo({ movie }) {
  console.log(movie);

  const [load, setLoad] = useState(false);

  const handleAddList = () => {
    localStorage.setItem(movie.imdbID, JSON.stringify(movie));
    setLoad(false);
  };

  const handleDeleteList = () => {
    localStorage.removeItem(movie.imdbID);
    setLoad(true);
  };

  const addButton = () => {
    return (
      <button className="add_list_btn" onClick={handleAddList}>
        Add to list
      </button>
    );
  };

  const deleteButton = () => {
    return (
      <button className="delete_list_btn" onClick={handleDeleteList}>
        Delete from list
      </button>
    );
  };

  useEffect(() => {
    if (localStorage.getItem(movie.imdbID) === null) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  }, []);

  return (
    <div className="movie-info">
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title} />{" "}
      </div>

      <div className="info_container">
        <div className="movie_title">
          <h1>{movie.Title}</h1>
        </div>

        <div className="movie_sub_infos">
          <div className="year_info">
            <p>{movie.Year}</p>
          </div>
          <div className="runtime_info">
            <p>{movie.Runtime}</p>{" "}
          </div>
          <div className="imdb_info">
            <p>
              <span>IMDB: </span>
              {movie.Ratings[0].Value.slice(0, -3)}
            </p>
          </div>
        </div>

        <div className="director">
          <p>
            <span id="info_key">Director: </span>
            {movie.Director}
          </p>
        </div>

        <div className="actors">
          <p>
            {" "}
            <span id="info_key">Actors: </span> {movie.Actors}
          </p>
        </div>
        <div className="country">
          <p>
            {" "}
            <span id="info_key">Country:</span> {movie.Country}
          </p>
        </div>
        <div className="genre">
          <p>
            {" "}
            <span id="info_key">Genre: </span> {movie.Genre}
          </p>
        </div>
        <div className="production">
          {" "}
          <p>
            <span id="info_key">Production: </span>
            {movie.Production}
          </p>
        </div>
        <div className="plot">
          <p>{movie.Plot}</p>
        </div>
        {load === true ? addButton() : deleteButton()}
      </div>
    </div>
  );
}

export default MovieInfo;
