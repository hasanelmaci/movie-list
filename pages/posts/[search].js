import MovieList from "../../components/MovieList";
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import { useState } from "react";
import Link from "next/link";

function Search({ movies }) {
  return (
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

      <MovieList queryList={movies.Search} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const key = process.env.REACT_APP_OMDB_KEY;
  const res = await fetch(
    `http://www.omdbapi.com/?s=${context.params.search}&type=movie&apikey=${key}`
  );
  const movies = await res.json();
  return {
    props: {
      movies,
    },
  };
}

export default Search;
