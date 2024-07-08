import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import { selectScreenshots } from "../../redux/games/gamesSlice";

export default function Slider() {
  const screenshots = useSelector(selectScreenshots);
  return (
    <Carousel>
      {screenshots.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.image} />
          </div>
        );
      })}
      {/* <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div> */}
    </Carousel>
  );
}
