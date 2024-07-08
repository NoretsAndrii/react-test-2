// import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGames, fetchGames } from "../../redux/games/gamesOps";
import GamesList from "../../components/GamesList/GamesList";
import {
  selectPage,
  selectSearch,
  setPage,
} from "../../redux/games/gamesSlice";
import SearchForm from "../../components/SearchForm/SearchForm";
import SortForm from "../../components/SortForm/SortForm";

export default function HomePage() {
  const page = useSelector(selectPage);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();
  useEffect(() => {
    if (page === 1) {
      dispatch(fetchGames(search));
      return;
    }
    dispatch(addGames({ page, search }));
  }, [dispatch, page, search]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY + 1 >
      document.documentElement.offsetHeight
    ) {
      console.log(111);
      dispatch(setPage());
    }
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      HomePage
      <SearchForm />
      <SortForm />
      <GamesList />
    </div>
  );
}
