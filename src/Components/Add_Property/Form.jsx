import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useScript from "../useScript";
import useStyle from "../useStyle";

export const Property_form = () => {
  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // 👇️ redirect to /contacts
  //   navigate("/Rent");
  // };
  useStyle("Form.css");
  return (
    <div className="formBody">
      <div class="cover1"></div>
      <div class="form">
        <form action="http://127.0.0.1/postData" method="POST">
          <h1 class="title-prop">
            ENTER PROPERTY <br /> DETAILS
          </h1>
          <input
            type="text"
            id="ownerName"
            name="name"
            placeholder="Owner's Name"
          />
          <input
            type="text"
            id="contact"
            name="phone_number"
            placeholder="Contact No."
          />
          <input type="text" id="area" name="area" placeholder="Area in Sqm" />
          <label for="Address" id="add">
            Address
          </label>
          <input
            type="text"
            id="Street_name"
            name="street_name"
            placeholder="Street Name"
          />
          <input type="text" id="City" name="city" placeholder="City" />
          <input type="text" id="State" name="state" placeholder="State" />
          <input
            type="text"
            id="Furnished"
            name="furnished_status"
            placeholder="Furnished Status"
          />
          <input type="text" id="Rent" name="rent" placeholder="Rent" />
          <input type="file" name="images" id="image_uploaded" />
          <div class="block">
            Success state animation
            <br />
            <button class="button success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
