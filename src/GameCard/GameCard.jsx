import css from "./GameCard.module.css";

export default function GameCard({ game }) {
  return (
    <>
      <div
        className={css.image}
        style={{ backgroundImage: `url(${game.background_image})` }}
      ></div>
      <div>
        <p>{game.name}</p>
        <p>Rating: {game.rating}</p>
        <p>{game.released}</p>
      </div>
    </>
  );
}
