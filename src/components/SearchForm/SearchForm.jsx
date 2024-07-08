import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/games/gamesSlice";

export default function SearchForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.elements.search.value;
    dispatch(setSearch(search));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
}
