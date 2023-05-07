import classes from "./Movies.module.css";
import MoviesCard from "../UI/MoviesCard";
import { useEffect } from "react";

const restring = localStorage.getItem("movies");
const fetched = JSON.parse(restring);
console.log(fetched.slice(0, 5));
const Movies = () => {
  const fetchMovieHandler = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      // console.log(data);
      let string = JSON.stringify(data);
      localStorage.setItem("movies", string);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  return (
    <>
      <div className={classes.movies_Heading}>Choose your Pick</div>
      <div className={classes.movies}>
        {fetched.slice(0, 5).map((movie) => (
          <MoviesCard data={movie} key={movie.show.id} />
        ))}
      </div>
    </>
  );
};

export default Movies;
