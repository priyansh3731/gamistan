import "./CartItemCard.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { WishlistContext } from "../../../context/WishlistContext";
import { Link } from "react-router-dom";
import { useState } from "react";

function CartItemCard(product) {
  const { _id, image, qty, productName, oldPrice, price, discount } = product;
  const { removeItemFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const { wishlistItems, addItemToWishlist } = useContext(WishlistContext);

  const productExistInWishlist = wishlistItems.some((item) => item._id === _id);
  const [disableCursor, setDisableCursor] = useState(false);
  const disableCursorHandler = () => {
    setDisableCursor(true);
    setTimeout(() => {
      setDisableCursor(false);
    }, 1000);
  };
  return (
    <div className="cart-card-container">
      <img className="card-card__image" src={image} alt="" />
      <div className="cart-item-details">
        <h4>{productName}</h4>
        <div className="cart-prices-container">
          <span className="cart-card-container__current-price">₹{price}</span>
          <span className="cart-card-container__old-price">₹{oldPrice}</span>
        </div>
        <span className="cart-item-discount">{discount}% OFF</span>
        <div className="cart-item-quantity">
          <span>Quantity: </span>
          <RemoveCircleIcon
            onClick={() =>
              qty <= 1 ? removeItemFromCart(_id) : decreaseQuantity(_id)
            }
            sx={{ "&:hover": { cursor: "pointer" } }}
          />

          <span>{qty}</span>
          <AddCircleIcon
            onClick={() => increaseQuantity(_id)}
            sx={{ "&:hover": { cursor: "pointer" } }}
          />
        </div>
        <div className="cart-actions">
          <button
            onClick={() => removeItemFromCart(_id)}
            className="remove-cart-item-btn"
          >
            REMOVE FROM CART
          </button>
          <br />
          {productExistInWishlist ? (
            <button className="cart-add-to-wishlist-btn">
              <Link to="/wishlist">GO TO WISHLIST</Link>
            </button>
          ) : (
            <button
              className="cart-add-to-wishlist-btn"
              id={`${disableCursor ? "disable-cursor" : ""}`}
              onClick={() => {
                disableCursorHandler();
                addItemToWishlist(product);
              }}
              disabled={disableCursor}
            >
              MOVE TO WISHLIST
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;