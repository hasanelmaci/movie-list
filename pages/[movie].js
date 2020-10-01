import MovieInfo from "../components/MovieInfo";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Head from "next/head";
import Link from "next/link";

function Movie({ movie }) {
  return (
    <div className="movie">
      <div>
        <div className="header">
          <Header />
          <div className="header_sub">
            <SearchBar />
            <Link href="/watchlist" as="/watchlist">
              <a className="mylist_link">My List</a>
            </Link>
          </div>
        </div>

        <MovieInfo movie={movie} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const key = process.env.REACT_APP_OMDB_KEY;
  const res = await fetch(
    `http://www.omdbapi.com/?i=${context.params.movie}&type=movie&apikey=${key}`
  );
  const movie = await res.json();
  return {
    props: {
      movie,
    },
  };
}

export default Movie;
