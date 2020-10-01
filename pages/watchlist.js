import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Link from "next/link";

import WatchListItems from "../components/WatchListItems";

function Watchlist() {
  return (
    <div className="watchlist">
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
