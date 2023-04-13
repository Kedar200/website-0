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
        <form
          action="http://kedar/postData"
          method="POST"
          encType="multipart/form-data"
        >
          <h1 class="title-prop">
            ENTER PROPERTY <br /> DETAILS
          </h1>
          <input
            type="text"
            class="text_input"
            id="ownerName"
            name="name"
            placeholder="Owner's Name"
          />

          <input
            type="text"
            class="text_input"
            id="contact"
            name="phone_number"
            placeholder="Contact No."
          />
          <label for="Address" class="text_input" id="add">
            Address
          </label>
          <input
            type="text"
            class="text_input"
            id="Street_name"
            name="street_name"
            placeholder="Street Name"
          />
          <input
            type="text"
            class="text_input"
            id="City"
            name="city"
            placeholder="City"
          />
          <input
            type="text"
            class="text_input"
            id="State"
            name="state"
            placeholder="State"
          />
          <input
            type="text"
            class="text_input"
            id="area"
            name="area"
            placeholder="Area in Sqm"
          />
          <input
            type="text"
            class="text_input"
            id="Furnished"
            name="furnished_status"
            placeholder="Furnished Status"
          />
          <input
            type="text"
            class="text_input"
            id="Rent"
            name="rent"
            placeholder="Rent"
          />

          <input type="file" id="File" name="images" />
          <button type="submit" id="btn1">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
