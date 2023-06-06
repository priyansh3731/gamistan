import { useContext } from "react";
import "./Filters.css";
import { ProductContext } from "../../../context/ProductContext";
function Filters({ showFilterMobile, setShowFilterMobile, setShowFilterBtn }) {
  const { state, dispatch } = useContext(ProductContext);

  return (
    <div className="filters-container" id={showFilterMobile ? "" : "hide"}>
      <form action="">
        <div className="heading-container">
          <h3>Filters</h3>
          <button type="button" onClick={() => dispatch({ type: "CLEAR" })}>
            Clear
          </button>
        </div>
        <h4>Price</h4>
        <ul>
          <li>
            <input
              onChange={() => dispatch({ type: "PRICE", payload: "htl" })}
              type="radio"
              checked={state.filters.price.htl}
              name="price"
              id="HTL"
            />
            <label htmlFor="price">High To Low</label>
          </li>
          <li>
            <input
              onChange={() => dispatch({ type: "PRICE", payload: "lth" })}
              checked={state.filters.price.lth}
              type="radio"
              name="price"
              id="LTH"
            />
            <label htmlFor="price">Low To High</label>
          </li>
        </ul>
        <h4>Categories</h4>
        <ul>
          <li>
            <input
              onChange={(e) =>
                dispatch({
                  type: "CATEGORIES",
                  payload: { isChecked: e.target.checked, value: "pc" },
                })
              }
              checked={state.filters.categories.includes("pc")}
              type="checkbox"
              name="categories"
              id=""
            />
            <label htmlFor="categories">PC</label>
          </li>
          <li>
            <input
              onChange={(e) =>
                dispatch({
                  type: "CATEGORIES",
                  payload: {
                    isChecked: e.target.checked,
                    value: "ps5",
                  },
                })
              }
              checked={state.filters.categories.includes("ps5")}
              type="checkbox"
              name="categories"
              id=""
            />
            <label htmlFor="categories">PS5</label>
          </li>
          <li>
            <input
              onChange={(e) =>
                dispatch({
                  type: "CATEGORIES",
                  payload: { isChecked: e.target.checked, value: "xbox" },
                })
              }
              checked={state.filters.categories.includes("xbox")}
              type="checkbox"
              name="categories"
              id=""
            />
            <label htmlFor="categories">Xbox</label>
          </li>
          <div className="rating-filter-container">
            <h4>Ratings</h4>
            <div className="rating-labels">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
            <input
              min="-5"
              max="-1"
              step="1"
              type="range"
              onChange={(e) => {
                dispatch({ type: "RATING", payload: e.target.value });
              }}
              value={state.filters.rating}
              name=""
              id=""
            />
          </div>
        </ul>
        <div
          className="pseudo"
          onClick={() => {
            setShowFilterMobile(false);
            setShowFilterBtn(true);
          }}
        ></div>
      </form>
    </div>
  );
}

export default Filters;