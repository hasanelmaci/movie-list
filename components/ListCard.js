import { useEffect, useState } from "react";

function ListCard({ itemkey, effectDelete }) {
  const [load, setLoad] = useState(false);
  const [movie, setMovie] = useState();
  const [key, setKey] = useState();
  const [localLength, setLocalLength] = useState();

  const handleDelete = () => {
    localStorage.removeItem(key);
    setLocalLength(localLength - 1);
    effectDelete(key);
  };

  useEffect(() => {
    const movieJSON = JSON.parse(
      localStorage.getItem(localStorage.key(itemkey))
    ); //key's value
    const itemKey = localStorage.key(itemkey); //imdbID

    setMovie(movieJSON);
    setKey(itemKey);
    setLoad(true);
  }, [localLength]);

  return (
    <div className="listcard_container">
      {load === true && movie ? (
        <div className="listcard">
          <div className="list_poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="listcard_sub">
            <div className="list_title">
              <h6>{movie.Title}</h6>
            </div>
            <button className="list_delete_btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
}

export default ListCard;
