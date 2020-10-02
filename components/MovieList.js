import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

function MovieList({ queryList }) {


  const showMovies = () => {
    return (
      <Container fluid="lg">
        <Row className="justify-content-md-center" lg={5} md={4} sm={3} xs={2}>
          {queryList?.map((item) => (
            <Col key={item.imdbID}>
              <img className="movie_img" src={item.Poster} alt={item.Title} />

              <div className="movie_link">
                <Link href={`/[movie]`} as={`/${item.imdbID}`}>
                  <a></a>
                </Link>
              </div>
              <div className="thumbnail_info">
                <Link href={`/[movie]`} as={`/${item.imdbID}`}>
                  <a>{item.Title}</a>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  return (
    <div>
      {queryList ? (
        showMovies()
      ) : (
        <h1 className="movie_not_found">The movie is not found...</h1>
      )}
    </div>
  );
}

export default MovieList;
