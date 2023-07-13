import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { DataReducer } from "../reducer/DataReducer";
import { meetupData } from "../data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [eventFilter, setEventFilter] = useState("");
  const initialData = {
    allMeetups: [...meetupData.meetups],
    filteredMeetups: [...meetupData.meetups],
    currentMeetup: {},
    meetupType: "",
  };

  const [state, dispatch] = useReducer(DataReducer, initialData);

  useEffect(() => {
    const filteredMeetupData = state.allMeetups.filter(
      (meetup) =>
        (meetup?.title &&
          meetup.title.toLowerCase().includes(searchText?.toLowerCase())) ||
        (eventFilter !== "" && meetup?.eventType === eventFilter)
    );

    dispatch({ type: "SetFilterData", payload: filteredMeetupData });
  }, [searchText, eventFilter, state.allMeetups]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        searchText,
        setSearchText,
        eventFilter,
        setEventFilter,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
