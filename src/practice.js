const movies = [
  {
    title: "interstellar",
    imdbRting: 8.9,
  },
  {
    title: "inception",
    imdbRting: 9,
  },

  {
    title: "the dark knight",
    imdbRting: 7,
  },
];
function MovieList() {
  return (
    <ul>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
}
function Movie({ movie }) {
  return <li>{movie.title}</li>;
}
