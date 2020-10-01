import Link from "next/link";

function Header() {
  return (
    <div>
      <h1 className="logo">
        <Link href="/" as="/">
          <a>MOVIE LIST</a>
        </Link>
      </h1>
    </div>
  );
}

export default Header;
