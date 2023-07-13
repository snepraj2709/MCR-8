import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useData } from "../context/DataContext";

export const Header = () => {
  const { state, dispatch } = useData();

  const [searchText, setSearchText] = useState("");

  const filteredMeetupData = state.allMeetups.filter(
    (meetup) =>
      meetup.title.toLowerCase().includes(searchText.toLowerCase()) ||
      meetup.eventTags.some((tag) =>
        tag.toLowerCase().includes(searchText.toLowerCase())
      )
  );

  useEffect(() => {
    dispatch({ type: "SetFilterData", payload: filteredMeetupData });
  }, [searchText]);

  // console.log(filteredMeetupData);

  return (
    <div className="flex flex-row justify-between m-4">
      <h1 className="font-bold">Meetup</h1>
      <div className="flex flex-row">
        <BsSearch />
        <input
          className="border"
          type="text"
          placeholder="Search name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};
