import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useScript from "../useScript";
import useStyle from "../useStyle";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const Property = () => {
  // // for importing js
  useScript("/Search-filter.js");
  // for importing style
  useStyle("/Property-style.css");
  // document.querySelector("#myInput").value = localStorage.getItem("Search");
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const queryParameters = new URLSearchParams(window.location.search);

  console.log(queryParameters.get("city"));
  const fetchProducts = () => {
    const url = "http://kedar/getData?city=" + queryParameters.get("city");
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div class="curve">
        <img src="/curve.svg" alt="background" draggable="false" />
        <div className="form">
          <form autocomplete="off" action="/Property">
            <div className="autocomplete">
              <input
                id="myInput"
                type="text"
                name="city"
                placeholder="Search..."
                required
              />
              <button type="submit">
                <img src="/search-img.svg" alt="search" />
              </button>
            </div>
          </form>
        </div>
        <p class="exit_button" onClick={() => navigate(-1)}>
          <img src="icons8-enter-80.png" alt="Exit" id="exit_button" /> Back
        </p>

        <p class="add_button" onClick={() => navigate("/Add_a_property")}>
          <img src="addProp.png" alt="Exit" id="add_button" /> List Your
          Property
        </p>
      </div>
      <div class="prop">
        <div>
          <p id="propName">Property Name</p>
          <p id="OwnedBy">Owned by</p>
          <p id="Desc">Desc </p>
        </div>

        <div class="container">
          <div>
            <button class="btn">
              <span class="btn__inner">
                <span class="btn__slide"></span>
                <span class="btn__content">
                  <img src="left.png" alt="left Click" />
                  <img
                    src="interior.png"
                    draggable="false"
                    id="image"
                    alt="Property photo"
                  />
                  <img src="right.png" alt="right click" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="rentBtn">
          <Link to="/Rent_Info">
            <button id="rent_button">Rent</button>
          </Link>
        </div>
      </div>
      {products.map((product) => (
        <div class="additionalProp">
          <img
            src={"http://Kedar/Images/" + product.image}
            alt="Property-image"
          />
          <div class="propInfo">
            <p id="propName2">{product.name}</p>
            <p id="OwnedBy2">{product.phone_number}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
