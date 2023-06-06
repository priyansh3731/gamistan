import { Link } from "react-router-dom";
import { default as MaterialCarousel } from "react-material-ui-carousel";
import Halo from "../../assets/img/halo-infinite-sweepstakes-800x420.jpg";
import God from "../../assets/img/God-of-War-Ragnarok-Featured-image-9998438-850x491.jpg";
import Hogwarts from "../../assets/img/hogwarts.jpg";
import "./Carousel.css";

function Carousel() {
  let items = [
    {
      id: 0,
      alt: "Halo Infinite Ad",
      img: Halo,
    },
    {
      id: 1,
      alt: "god of war Ad",
      img: God,
    },
    {
      id: 2,
      alt: "Hogwarts Legacy Ad",
      img: Hogwarts,
    },
  ];
  return (
    <MaterialCarousel>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </MaterialCarousel>
  );
}

function Item({ item }) {
  return (
    <Link to={`/products/product-details/${item.id}`}>
      <img alt={item.alt} className="carousel-img" src={item.img} />
    </Link>
  );
}

export default Carousel;