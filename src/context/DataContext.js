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
  };

  const [state, dispatch] = useReducer(DataReducer, initialData);

  const filterEvents = (events, searchText, eventFilter) => {
    const filteredEvents = events.filter((event) => {
      if (eventFilter !== "" && event.eventType !== eventFilter) {
        return false;
      }
      const lowercaseSearchText = searchText.toLowerCase();
      const lowercaseTitle = event.title.toLowerCase();
      const lowercaseTags = event.eventTags.map((tag) => tag.toLowerCase());

      if (lowercaseTitle.includes(lowercaseSearchText)) {
        return true;
      }

      if (lowercaseTags.some((tag) => tag.includes(lowercaseSearchText))) {
        return true;
      }
      return false;
    });
    return filteredEvents;
  };

  useEffect(() => {
    const filteredMeetupData = filterEvents(
      state?.allMeetups,
      searchText,
      eventFilter
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
