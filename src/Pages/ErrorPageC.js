import Header from "../Components/Header";
import SideNavigation from "../Components/SideNavigation";
import Error from "./Error";
import classes from "../App.module.css";

function ErrorPageC() {
  return (
    <div className={classes.grid_container}>
      <div className={classes.grid_header}>
        <Header />
      </div>
      <div className={classes.grid_menu}>
        <SideNavigation />
      </div>
      <div className={classes.grid_main}>
        <Error />
      </div>
    </div>
  );
}

export default ErrorPageC;
