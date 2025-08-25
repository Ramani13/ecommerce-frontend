import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);
  const { query } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Image mapping
  const imageMap = {
    "crop top": "/images/croptop.jpg",
    "blue denim": "/images/bluedenim.jpg",
    "black jean": "/images/blackjean.jpg",
    "ripped": "/images/ripped.jpg",
    "printed": "/images/printedt.jpg",
    "t-shirt": "/images/t-shirt1.jpg",
    "t-shirt 2": "/images/t-shirt-2.jpg",
    "casual t-shirt": "/images/casual.jpg",
    "sleeveless": "/images/sleeveless.jpg",
    "slim fit": "/images/slimfit.jpg",

    "floral frock": "/images/froalfrok.jpg",
    "pink party frock": "/images/kidspink.jpg",
    "casual cotton frock": "/images/casualkids.jpg",
     "formal pants": "/images/fromal.jpg",  // fixed typo
     "casual chinos": "/images/casual.jpg",    // add chinos image

    "frock top": "/images/froaltop.jpg",
     "floral top": "/images/froaltop.jpg",      

    "bangles": "/images/bangles.jpg",
    "earring": "/images/earring.jpg",
    "ring": "/images/ring.jpg",

    "table lamp": "/images/tablelamp.jpg",
    "wall hanging": "/images/wallhanding.jpg",
    "flower vase": "/images/flowervase.jpg",
  };

  const getImage = (name = "") => {
    const lower = name.toLowerCase();
    for (let key in imageMap) {
      if (lower.includes(key)) return imageMap[key];
    }
    return "/images/default.jpg";
  };

  // ✅ Apply search filter
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  if (status === "loading") return <p className="text-center">Loading...</p>;
  if (status === "failed") return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={{ ...product, image: getImage(product.name) }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
