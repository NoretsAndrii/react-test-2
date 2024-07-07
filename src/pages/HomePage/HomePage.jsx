import axios from "axios";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const getGames = async () => {
      const data = await axios.get(
        "https://api.rawg.io/api/games?key=8768630ce9a24dd286494efc0a46c443&page_size=30&page=4"
      );
      console.log(data);
    };
    getGames();
  }, []);
  return <div>HomePage</div>;
}
