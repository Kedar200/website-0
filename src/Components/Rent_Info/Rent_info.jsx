import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useScript from "../useScript";
import useStyle from "../useStyle";

export const Rent_info = () => {
  const navigate = useNavigate();
  useStyle("Rent_info_style.css");
  return (
    <div>
      <p class="exit_button" onClick={() => navigate(-1)}>
        <img src="icons8-enter-80.png" alt="Exit" id="exit_button" /> Back
      </p>

      <div class="background">
        <div class="cover"></div>
        <div class="wrapper">
          <div class="column"></div>
          <div class="cloumn1" id="c1">
            <ul>
              <li id="t">Area in Sq.ft</li>
              <li id="t">Furnishing Status</li>
              <li id="t">Owner's Name</li>
            </ul>
          </div>
          <div class="column1" id="c2">
            <ul>
              <li id="t">Rent</li>
              <li id="t">Address</li>
              <li id="t">Contact No.</li>
            </ul>
          </div>
        </div>
        <div class="rent">
          <p>22,000/Month</p>
        </div>
      </div>
    </div>
  );
};
