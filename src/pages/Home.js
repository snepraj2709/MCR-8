import { EventCard } from "../components/EventCard";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header";
import { useData } from "../context/DataContext";

export default function Home() {
  const { state } = useData();
  return (
    <div>
      <Header />
      <hr />
      <FilterBar />
      <hr />
      {state?.filteredMeetups?.map((meetup) => (
        <div className="flex flex-row">
          <EventCard meetup={meetup} />
        </div>
      ))}
    </div>
  );
}
