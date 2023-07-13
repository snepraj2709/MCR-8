import { useEffect } from "react";
import { useData } from "../context/DataContext";

export const FilterBar = () => {
  const { state, dispatch, searchText, eventFilter, setEventFilter } =
    useData();

  const filteredMeetupByBothSearchAndType = state.allMeetups.filter(
    (meetup) =>
      (meetup?.title &&
        meetup.title.toLowerCase().includes(searchText?.toLowerCase())) ||
      (eventFilter !== "" && meetup.eventType === eventFilter)
  );

  useEffect(() => {
    dispatch({
      type: "SetFilterData",
      payload: filteredMeetupByBothSearchAndType,
    });
  }, [searchText, eventFilter]);

  const changeFilterHandler = (e) => {
    const selectedEventFilter = e.target.value;
    setEventFilter(selectedEventFilter);

    let filteredMeetups = state.allMeetups;

    if (selectedEventFilter !== "Both") {
      filteredMeetups = filteredMeetups.filter(
        (meetup) => meetup.eventType === selectedEventFilter
      );
    }

    dispatch({ type: "SetFilterData", payload: filteredMeetups });
  };

  return (
    <div className="flex flex-row justify-between m-4">
      <h1>Meetup Events</h1>
      <div>
        <select value={eventFilter} onChange={changeFilterHandler}>
          <option value="">All</option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
        </select>
      </div>
    </div>
  );
};
