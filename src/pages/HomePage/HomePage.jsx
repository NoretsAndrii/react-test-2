// import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGames, fetchGames } from "../../redux/games/gamesOps";
import GamesList from "../../components/GamesList/GamesList";
import { selectPage, setPage } from "../../redux/games/gamesSlice";

export default function HomePage() {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (page === 1) {
      dispatch(fetchGames());
      return;
    }
    dispatch(addGames(page));
  }, [dispatch, page]);

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
      <GamesList />
    </div>
  );
}
