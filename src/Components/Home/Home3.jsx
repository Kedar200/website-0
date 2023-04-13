import { Link, useNavigate } from "react-router-dom";
import useScript from "../useScript";
import { useState, useEffect } from "react";

export const Home3 = () => {
  useScript("/Search-filter.js");

  return (
    <div>
      <div class="split right">
        <div className="form">
          <form action="/Property" autocomplete="off" method="get">
            <div className="autocomplete">
              <input
                id="myInput"
                type="text"
                name="city"
                placeholder="Search..."
                required
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="centered">
          <div className="description">
            <p>
              Welcome to our Property Management Service (PMS) website, where we
              make renting your dream home a breeze! Our selection of rental
              properties is second to none, with a wide variety of options to
              suit every lifestyle and budget. With menues to choose from
              properties exclusively maintaned by us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
