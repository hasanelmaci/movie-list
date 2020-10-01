import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
import Head from "next/head";
import WatchListItems from "../components/WatchListItems";

function Watchlist() {
  return (
    <div className="watchlist">
      <Head>
        <meta charset="UTF-8" />
        <title>Movie List</title>
        <meta name="description" content="Informations about movies" />
        <meta name="keywords" content="Movie,List" />
        <meta name="author" content="Hasan Elmacı" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <h4 className="watchlist_h4">My Movie List</h4>
      <div className="watchlist_container">
        <WatchListItems />
      </div>
    </div>
  );
}

export default Watchlist;
