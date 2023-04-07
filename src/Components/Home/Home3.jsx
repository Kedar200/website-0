import { Link } from "react-router-dom";

export const Home3 = () => {
  const script = document.createElement("script");
  script.src = "/Search-filter.js";
  document.body.appendChild(script);

  return (
    <div>
      <div class="split right">
        <div className="form">
          <form autocomplete="off">
            <div className="autocomplete">
              <input
                id="myInput"
                type="text"
                name="city"
                placeholder="Search..."
                required
              />
              <Link to="/Property">
                <button type="submit">Submit</button>
              </Link>{" "}
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
