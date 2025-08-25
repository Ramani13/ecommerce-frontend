import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// 👇 Temporary dummy products
const dummyProducts = [
  { id: 1, name: "Men T-Shirt", price: 499, image: "https://via.placeholder.com/200x250?text=Men+T-Shirt" },
  { id: 2, name: "Women Dress", price: 999, image: "https://via.placeholder.com/200x250?text=Women+Dress" },
  { id: 3, name: "Kids Shoes", price: 699, image: "https://via.placeholder.com/200x250?text=Kids+Shoes" },
  { id: 4, name: "Beauty Cream", price: 299, image: "https://via.placeholder.com/200x250?text=Beauty+Cream" },
  { id: 5, name: "Home Sofa", price: 12999, image: "https://via.placeholder.com/200x250?text=Home+Sofa" },
  { id: 6, name: "Men Jeans", price: 1499, image: "https://via.placeholder.com/200x250?text=Men+Jeans" },
];

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);

  const query = new URLSearchParams(location.search).get("q")?.toLowerCase();

  useEffect(() => {
    if (query) {
      const filtered = dummyProducts.filter((p) =>
        p.name.toLowerCase().includes(query)
      );
      setResults(filtered);
    } else {
      setResults([]); // nothing typed → empty
    }
  }, [query]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Search Results for "{query}"
      </h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-pink-600 font-bold">₹{product.price}</p>
              <button className="mt-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-lg">No matching products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
