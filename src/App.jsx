import { useState, useEffect } from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import MovieList from "./component/MovieList";
import Search from "./component/Search";

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [search, setSearch] = useState([]);

  const handleSearch = async (value) => {
    setSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setSearch(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fecthMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer ${import.meta.env.VITE_API_KEY}",
        },
      };

      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fecthMovie();
  }, []);

  return (
    <>
      <div className="bg-black bg-10">
        <Header onSearch={handleSearch} />
        <Banner />
        {search.length > 0 ? (
          <Search title={"Kết quả tìm kiếm"} data={search} />
        ) : (
          <>
            <MovieList title={"Phim HOT"} data={movie} />
            <MovieList title={"Phim đề cử"} data={movieRate} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
