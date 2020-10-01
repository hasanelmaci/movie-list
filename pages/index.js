import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";
import Head from 'next/head'

export default function Home({ movies }) {
  const [foundMovies, setFoundMovies] = useState(movies.Search); // film listelemerilne kadar gereksizdi. Bu da proje sonunda silnebilir.(kontrol et)

  return (
    <div>
      <Head>
      <meta charSet="UTF-8"/>
      <title>Movie List</title>
  <meta name="description" content="Informations about movies"/>
  <meta name="keywords" content="Movie,List"/>
  <meta name="author" content="Hasan Elmacı"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>


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
