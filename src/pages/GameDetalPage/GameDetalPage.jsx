import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGameById, getScreenshots } from "../../redux/games/gamesOps";
import { selectGameDetails } from "../../redux/games/gamesSlice";
import css from "./GameDetalPage.module.css";
import Slider from "../../components/Slider/Slider";

export default function GameDetalPage() {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const gameDetails = useSelector(selectGameDetails);

  useEffect(() => {
    dispatch(fetchGameById(gameId));
  }, [dispatch, gameId]);

  useEffect(() => {
    if (!gameDetails) return;
    dispatch(getScreenshots(gameDetails.id));
  }, [dispatch, gameDetails]);

  return (
    <>
      {gameDetails && (
        <div>
          <h2>{gameDetails.name}</h2>
          <div className={css.info}>
            <div className={css.img_box}>
              <img src={gameDetails.background_image} alt="" />
            </div>
            <div className={css.info_box}>
              <p>Rating: {gameDetails.rating}</p>
            </div>
          </div>
          <p>{gameDetails.description_raw}</p>
          <Slider />
        </div>
      )}
    </>
  );
}
