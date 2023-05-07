import classes from "./SideNavigation.module.css";
import HomeIcon from "../UI/HomeIcon";
import colorclasses from "../UI/iconColourChange.module.css";
import { Link } from "react-router-dom";
const SideNavigation = () => {
  return (
    <>
      <ul className={classes.navbar__sidebar} id="sideBar">
        <Link to="/">
          <li>
            <button className={colorclasses.btn}>
              <div className={classes.icon}>
                <HomeIcon />
              </div>
            </button>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default SideNavigation;
