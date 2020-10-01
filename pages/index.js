import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";

export default function Home({ movies }) {
  const [foundMovies, setFoundMovies] = useState(movies.Search); // film listelemerilne kadar gereksizdi. Bu da proje sonunda silnebilir.(kontrol et)

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

      <MovieList queryList={foundMovies} />
    </div>
  );
}

export async function getStaticProps() {
  const key = process.env.REACT_APP_OMDB_KEY;
  const res = await fetch(
    `http://www.omdbapi.com/?s=star&type=movie&apikey=${key}`
  );
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
}
