import { useSelector } from "react-redux";
import { selectGames } from "../../redux/games/gamesSlice";
import GameCard from "../../GameCard/GameCard";
import css from "./GamesList.module.css";

export default function GamesList() {
  const games = useSelector(selectGames);

  return (
    <div>
      GamesList
      <ul className={css.list}>
        {games.map((game) => (
          <li className={css.card} key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </div>
  );
}
