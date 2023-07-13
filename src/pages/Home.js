import { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header";
import { useData } from "../context/DataContext";

export default function Home() {
  const { state, searchText, eventFilter } = useData();

  const [allFilteredData, setAllfilteredData] = useState(
    state?.filteredMeetups
  );

  useEffect(() => {
    setAllfilteredData(state?.filteredMeetups);
  }, [searchText, eventFilter, state?.filteredMeetups]);

  return (
    <div className="m-10">
      <Header />
      <hr />
      <FilterBar />
      <hr />
      <div className="grid grid-cols-3 gap-4">
        {allFilteredData.length > 0 ? (
          allFilteredData.map((meetup) => (
            <EventCard key={meetup.id} meetup={meetup} />
          ))
        ) : (
          <h2 className="font-bold text-xl text-center my-10">
            No event to display
          </h2>
        )}
      </div>
    </div>
  );
}
