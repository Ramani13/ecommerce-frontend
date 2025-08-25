import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { setQuery } from "../features/search/searchSlice";
import { ShoppingCart, LogIn, UserPlus, LogOut, Search } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart); // ✅ cart items
  const dispatch = useDispatch();

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <Link to="/" className="text-2xl font-extrabold text-pink-600">
        Ramani
      </Link>

      {/* Center: Search */}
      <div className="flex-1 px-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={(e) => dispatch(setQuery(e.target.value))}
          />
          <Search
            size={18}
            className="absolute right-3 top-2.5 text-gray-400"
          />
        </div>
      </div>

      {/* Right: Auth + Cart */}
      <div className="flex items-center space-x-6">
        {!user ? (
          <>
            <Link
              to="/login"
              className="hover:text-pink-600 flex items-center space-x-1"
            >
              <LogIn size={20} /> <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="hover:text-pink-600 flex items-center space-x-1"
            >
              <UserPlus size={20} /> <span>Register</span>
            </Link>
          </>
        ) : (
          <button
            onClick={() => dispatch(logout())}
            className="hover:text-red-600 flex items-center space-x-1"
          >
            <LogOut size={20} /> <span>Logout</span>
          </button>
        )}

        {/* Cart with count */}
        <Link
          to="/cart"
          className="hover:text-pink-600 flex items-center space-x-1 relative"
        >
          <ShoppingCart size={22} />
          <span>Cart</span>
          {items.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {items.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
