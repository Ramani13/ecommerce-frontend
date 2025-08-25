import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";

const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div>
          {items.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>₹{item.price} x {item.qty}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item._id))}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ₹{total}</h3>
            <button
              onClick={() => dispatch(clearCart())}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
