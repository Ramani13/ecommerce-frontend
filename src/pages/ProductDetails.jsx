import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axiosInstance";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
      {/* Image */}
      <div className="flex-1">
        <img
          src={product.image || "https://via.placeholder.com/500x600"}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-lg text-gray-600 mb-4">{product.brand}</p>
        <p className="text-2xl font-semibold text-pink-600 mb-6">₹{product.price}</p>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
