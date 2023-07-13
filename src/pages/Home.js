import { EventCard } from "../components/EventCard";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header";
import { useData } from "../context/DataContext";

export default function Home() {
  const { state } = useData();
  return (
    <div className="m-10">
      <Header />
      <hr />
      <FilterBar />
      <hr />
      {state?.filteredMeetups?.map((meetup) => (
        <div className="grid grid-cols-3 gap-4">
          <EventCard meetup={meetup} />
        </div>
      ))}
    </div>
  );
}
