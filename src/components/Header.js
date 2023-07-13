import { BsSearch } from "react-icons/bs";
import { useData } from "../context/DataContext";

export const Header = () => {
  const { searchText, setSearchText } = useData();

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
