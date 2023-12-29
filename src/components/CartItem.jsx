import { formatPrice, generateQuantityOptions } from "../utils";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const CartItem = ({ cartItem }) => {
  const { cartID, title, price, image, quantity, company, productColor } =
    cartItem;

  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleQuantity = (e) => {
    dispatch(editItem({ cartID, quantity: parseInt(e.target.value) }));
  };

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b 
                order-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:-32 object-cover"
      />
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* COMPANY */}
        <h4 className="capitalize text-sm text-neutral-content mt-2">
          {company}
        </h4>
        {/* COLOR */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>

      <div className="sm:ml-12">
        {/* QUANTITY */}
        <div className="form-control max-w-xs">
          <label htmlFor="quantity" className="label p-0">
            <span className="label-text">Quantity</span>
          </label>
          <select
            name="quantity"
            id="quantity"
            className="mt-2 select select-base select-bordered select-xs"
            value={quantity}
            onChange={handleQuantity}
          >
            {generateQuantityOptions(quantity + 5)}
          </select>
        </div>

        {/* REMOVE */}
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromCart}
        >
          Remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItem;
