import React, { useEffect, useState } from "react";
import Home from "./Home"
import axios from "axios";
// import { json } from "react-router-dom";
// import { BiSunFill, BiMoon } from "react-icons/bi";

const Navbar = ({ onSelectCategory, onSearch }) => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light-theme";
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [theme, setTheme] = useState(getInitialTheme());
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (value) => {
    try {
      const response = await axios.get("http://localhost:4545/ecommerce/product");
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = async (value) => {
    setInput(value);
    if (value.length >= 1) {
      setShowSearchResults(true);
      try {
        const response = await axios.get(
          `http://localhost:4545/ecommerce/product/search?keyword=${value}`
        );
        setSearchResults(response.data);
        setNoResults(response.data.length === 0);
        console.log(response.data);
      } catch (error) {
        console.error("Error searching:", error);
      }
    } else {
      setShowSearchResults(false);
      setSearchResults([]);
      setNoResults(false);
    }
  };

  /*
  // const handleChange = async (value) => {
  //   setInput(value);
  //   if (value.length >= 1) {
  //     setShowSearchResults(true);
  //     try {
  //       let response;
  //       if (!isNaN(value)) {
  //         response = await axios.get(`http://localhost:8080/api/products/search?id=${value}`);
  //       } else {
  //         response = await axios.get(`http://localhost:8080/api/products/search?keyword=${value}`);
  //       }
  //       const results = response.data;
  //       setSearchResults(results);
  //       setNoResults(results.length === 0);
  //       console.log(results);
  //     } catch (error) {
  //       console.error("Error searching:", error.response ? error.response.data : error.message);
  //     }
  //   } else {
  //     setShowSearchResults(false);
  //     setSearchResults([]);
  //     setNoResults(false);
  //   }
  // };
  */

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const categories = [
    "Laptop",
    "Headphone",
    "Mobile",
    "Electronics",
    "Toys",
    "Fashion",
  ];

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid d-flex flex-column">

            {/* ===== FIRST ROW (TITLE) ===== */}
            <div className="w-100 text-center mb-2">
              <a className="navbar-brand fw-bold fs-4">
                Srikanth Online Store
              </a>
            </div>

            {/* ===== SECOND ROW (MENU + SEARCH) ===== */}
            <div className="w-100 d-flex justify-content-between align-items-center">

              <div className="collapse navbar-collapse show">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/add_product">
                      Add Product
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </a>

                    <ul className="dropdown-menu">
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            className="dropdown-item"
                            onClick={() => handleCategorySelect(category)}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>

                </ul>

                {/* Theme Toggle */}
                <button className="theme-btn me-3" onClick={() => toggleTheme()}>
                  {theme === "dark-theme" ? (
                    <i className="bi bi-moon-fill"></i>
                  ) : (
                    <i className="bi bi-sun-fill"></i>
                  )}
                </button>

                {/* Cart + Search */}
                <div className="d-flex align-items-center cart position-relative">
                  <a href="/cart" className="nav-link text-dark">
                    <i
                      className="bi bi-cart me-2"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Cart
                    </i>
                  </a>

                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />

                  {showSearchResults && (
                    <ul className="list-group position-absolute top-100 start-0 w-100">
                      {searchResults.length > 0 ? (
                        searchResults.map((result) => (
                          <li key={result.id} className="list-group-item">
                            <a href={`/product/${result.id}`} className="search-result-link">
                              <span>{result.name}</span>
                            </a>
                          </li>
                        ))
                      ) : (
                        noResults && (
                          <p className="no-results-message">
                            No Prouduct with such Name
                          </p>
                        )
                      )}
                    </ul>
                  )}

                  <div />
                </div>

              </div>
            </div>

          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;