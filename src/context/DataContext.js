import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { meetupData } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialData = {
    allMeetups: [...meetupData.meetups],
    filteredMeetups: [...meetupData.meetups],
    currentMeetup: {},
    meetupType: "",
  };

  const [state, dispatch] = useReducer(DataReducer, initialData);

  // const fetchData = () => {
  //   dispatch({ type: "InitialDataFetch", payload: Data });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
