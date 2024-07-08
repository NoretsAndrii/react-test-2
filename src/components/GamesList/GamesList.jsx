import { useSelector } from "react-redux";
import { selectSortedGames } from "../../redux/games/gamesSlice";
import GameCard from "../GameCard/GameCard";
import css from "./GamesList.module.css";
import { Link } from "react-router-dom";

export default function GamesList() {
  const games = useSelector(selectSortedGames);

  return (
    <div>
      GamesList
      <ul className={css.list}>
        {games.map((game) => (
          <li className={css.card} key={game.id}>
            <Link to={`/game/${game.id}`} style={{ color: "white" }}>
              <GameCard game={game} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
