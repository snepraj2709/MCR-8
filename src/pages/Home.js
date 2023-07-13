import { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header";
import { useData } from "../context/DataContext";

export default function Home() {
  const { state, searchText } = useData();

  const [allFilteredData, setAllfilteredData] = useState(state?.allMeetups);

  useEffect(() => {
    setAllfilteredData(state?.filteredMeetups);
  }, [searchText]);

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
          <h2>No event to display</h2>
        )}
      </div>
    </div>
  );
}
