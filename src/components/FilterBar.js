import { useState } from "react";
import { useData } from "../context/DataContext";

export const FilterBar = () => {
  const [eventFilter, setEventFilter] = useState("");
  const { state, dispatch } = useData();

  const filteredMeetupsByType = state.allMeetups.filter(
    (meetup) => meetup.eventType === eventFilter
  );

  const filteredMeetupByBothSearchAndType = state.filteredMeetups.filter(
    (meetup) => (meetup) => meetup.eventType === eventFilter
  );

  //   console.log(
  //     "filteredMeetupByBothSearchAndType",
  //     filteredMeetupByBothSearchAndType
  //   );

  //   console.log("filteredMeetupsByType", filteredMeetupsByType);

  const changeFilterHandler = (e) => {
    setEventFilter({ ...state, meetupType: e.target.value });
    if (state.filteredMeetups.length > 0) {
      dispatch({
        type: "SetFilterData",
        payload: filteredMeetupByBothSearchAndType,
      });
    } else {
      dispatch({
        type: "SetFilterData",
        payload: filteredMeetupsByType,
      });
    }
  };

  return (
    <div className="flex flex-row justify-between m-4">
      <h1>Meetup Events</h1>
      <div>
        <select value={eventFilter} onChange={(e) => changeFilterHandler(e)}>
          <option value="Both">Both</option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
        </select>
      </div>
    </div>
  );
};
