import { useDispatch, useSelector } from "react-redux";
import { selectSortValue, setSortValue } from "../../redux/games/gamesSlice";

export default function SortForm() {
  const dispatch = useDispatch();
  const sortValue = useSelector(selectSortValue);

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(setSortValue(e.target.value));
  };

  return (
    <div>
      <label htmlFor="select">Sort</label>
      <select value={sortValue} onChange={handleChange} id="select">
        <option value=""></option>
        <option value="ratingUp">rating 1...</option>
        <option value="ratingDown">rating 9...</option>
        <option value="dateUp">date 1...</option>
        <option value="dateDown">date 9...</option>
      </select>
    </div>
  );
}
