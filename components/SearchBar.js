import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ handleSearchMovie }) {
  const [searchInputMovie, setSearchInputMovie] = useState("star");

  const handleSubmit = (e) => {
    e.preventDefault();
    const frm = document.getElementsByName("contact-form")[0];
    frm.reset();
  };

  return (
    <div className="searchbar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchInputMovie(e.target.value.trim())}
        />
        <Link
          href={`/posts/[search]`}
          as={`/posts/${
            searchInputMovie.length === 0 || searchInputMovie.charAt(0) === " "
              ? null
              : searchInputMovie
          } `}
        >
          <a>
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </a>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
