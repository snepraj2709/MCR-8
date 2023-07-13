import { useData } from "../context/DataContext";

export const FilterBar = () => {
  const { eventFilter, setEventFilter } = useData();

  return (
    <div className="flex flex-row justify-between m-4">
      <h1>Meetup Events</h1>
      <div>
        <select
          value={eventFilter}
          onChange={(e) => setEventFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
        </select>
      </div>
    </div>
  );
};
