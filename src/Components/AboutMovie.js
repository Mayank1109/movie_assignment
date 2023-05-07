import appContext from "./app-context";
import { useContext } from "react";
import StarIcon from "../UI/StarIcon";
import classes from "./AboutMovie.module.css";
const AboutMovie = (props) => {
  const empty = "---";
  const ctx = useContext(appContext);
  const restring = localStorage.getItem("fetched");
  const ans = JSON.parse(restring);
  const data = ctx.fetchedMovie ? ctx.fetchedMovie : ans;
  const fetchSummary = data.show.summary;
  const summary = fetchSummary.replace(/<[^>]+>/g, "");
  const modalHandler = (event) => {
    var ele = document.getElementById("btn");
    ele.innerText = "BOOKED 4 U !";
    console.log(event.target);
  };
  return (
    <>
      <div className={classes.about_movie}>
        <div className={classes.image}>
          <img src={data.show.image.medium} />
          <button id="btn" onClick={modalHandler}>
            + BOOK
          </button>
        </div>
        <div className={classes.info}>
          <div className={classes.top_div}>
            <div className={classes.score}>
              <h2>Score :</h2>
              <h3>{data.score}</h3>
            </div>
            <div className={classes.title}>
              <h1>{data.show.name}</h1>
            </div>
          </div>
          <div className={classes.extra}>
            <span>
              <StarIcon /> {data.show.rating.average}
            </span>
            <span>{data.show.runtime} min</span>
          </div>
          <div className={classes.desc}>
            <p>{summary}</p>
          </div>
          <div className={classes.other}>
            <li>
              <p>Genre:</p>
              <p>{data.show.genres[0]}</p>
            </li>
            <li>
              <p>Released:</p>
              <p>{data.show.premiered}</p>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMovie;
