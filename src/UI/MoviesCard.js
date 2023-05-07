import classes from "./MoviesCard.module.css";
import { Link } from "react-router-dom";
import appContext from "../Components/app-context";
import { useContext } from "react";
const MovieCard = (props) => {
  const ctx = useContext(appContext);
  const displayHandler = () => {
    console.log("displayed!");
    ctx.onfetch(props.data);
  };
  return (
    <div className={classes.movies_card}>
      <div className={classes.image}>
        <img src={props.data.show.image.medium} />
      </div>
      <div className={classes.info}>
        <h2>{props.data.name}</h2>
        <Link to="/moviedesc">
          <button onClick={displayHandler}>See More</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
