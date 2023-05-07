import Header from "../Components/Header";
import SideNavigation from "../Components/SideNavigation";
import AboutMovie from "../Components/AboutMovie";

import classes from "../App.module.css";
const HomePage = () => {
  return (
    <div className={classes.grid_container}>
      <div className={classes.grid_header}>
        <Header />
      </div>
      <div className={classes.grid_menu}>
        <SideNavigation />
      </div>
      <div className={classes.grid_main}>
        <AboutMovie />
      </div>
    </div>
  );
};

export default HomePage;
