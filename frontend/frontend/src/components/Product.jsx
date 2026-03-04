import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "../Context/Context";
import axios from "../axios";

const Product = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, refreshData } =
    useContext(AppContext);

  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4545/ecommerce/product/${id}`
        );

        setProduct(response.data);
        console.log("Product from backend:", response.data);

        if (response.data.imageName) {
          fetchImage();
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4545/ecommerce/product/${id}/image`,
          { responseType: "blob" }
        );

        setImageUrl(URL.createObjectURL(response.data));
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const deleteProduct = async () => {
    try {
      await axios.delete(
        `http://localhost:4545/ecommerce/product/${id}`
      );
      removeFromCart(id);
      alert("Product deleted successfully");
      refreshData();
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditClick = () => {
    navigate(`/product/update/${id}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert("Product added to cart");
  };

  if (!product) {
    return (
      <h2 className="text-center" style={{ padding: "10rem" }}>
        Loading...
      </h2>
    );
  }

  return (
    <div className="containers" style={{ display: "flex" }}>
      
      {/* Safe Image Rendering */}
      {imageUrl && (
        <img
          className="left-column-img"
          src={imageUrl}
          alt={product.imageName}
          style={{ width: "50%", height: "auto" }}
        />
      )}

      <div className="right-column" style={{ width: "50%" }}>
        <div className="product-description">

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "1.2rem", fontWeight: "lighter" }}>
              {product.category}
            </span>

            {/* Safe Date Display */}
            <div className="release-date" style={{ marginBottom: "2rem" }}>
              <h6>
                Listed :
                <span>
                  <i>{product.releaseDate || "Not Available"}</i>
                </span>
              </h6>
            </div>
          </div>

          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "0.5rem",
              textTransform: "capitalize",
              letterSpacing: "1px",
            }}
          >
            {product.name}
          </h1>

          <i>{product.brand}</i>

          <p
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              margin: "10px 0px 0px",
            }}
          >
            PRODUCT DESCRIPTION :
          </p>

          <p>{product.description}</p>
        </div>

        <div className="product-price">
          <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {"$" + product.price}
          </span>

          {/* Correct Available Logic */}
          <button
            className={`cart-btn ${
              !product.available ? "disabled-btn" : ""
            }`}
            onClick={handleAddToCart}
            disabled={!product.available}
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "1rem",
            }}
          >
            {product.available ? "Add to cart" : "Out of Stock"}
          </button>

          <h6>
            Stock Available :
            <i style={{ color: "green", fontWeight: "bold" }}>
              {" "}{product.quantity}
            </i>
          </h6>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleEditClick}
          >
            Update
          </button>

          <button
            className="btn btn-danger"
            type="button"
            onClick={deleteProduct}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;