import Header from "../Components/Header";
import SideNavigation from "../Components/SideNavigation";
import Movies from "../Components/Movies";

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
        <Movies />
      </div>
    </div>
  );
};

export default HomePage;
