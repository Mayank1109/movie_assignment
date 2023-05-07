import React, { useState } from "react";

const appContext = React.createContext({
  fetchedMovie: [],
  onfetch: (fetchedMovie) => {},
});

export const AppContextProvider = (props) => {
  const [fetchedMovie, setFetchedMovie] = useState(null);
  const fetchHandler = (fetchedMovie) => {
    setFetchedMovie(fetchedMovie);
    const dstring = JSON.stringify(fetchedMovie);
    localStorage.setItem("fetched", dstring);
    // console.log(searchResults);
  };

  return (
    <appContext.Provider
      value={{
        fetchedMovie: fetchedMovie,
        onfetch: fetchHandler,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default appContext;
