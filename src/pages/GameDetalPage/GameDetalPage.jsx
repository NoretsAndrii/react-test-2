import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../../redux/games/gamesOps";

export default function GameDetalPage() {
  const { gameId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGameById(gameId));
  }, [dispatch, gameId]);

  return <p>GameDetalPage</p>;
}
