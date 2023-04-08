import { Home } from "./Components/Home/Home";
import { About } from "./Components/About";
import { Nomatch } from "./Components/Nomatch";
import { Routes, Route } from "react-router-dom";
import { Property } from "./Components/Property";
import { Home1 } from "./Components/Home/Home1";
import { Home2 } from "./Components/Home/Home2";
import { Home3 } from "./Components/Home/Home3";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Home1 />
            </>
          }
        />{" "}
        <Route
          path="/buy"
          element={
            <>
              <Home />
              <Home2 />
            </>
          }
        />{" "}
        <Route
          path="/rent"
          element={
            <>
              <Home />
              <Home3 />
            </>
          }
        />{" "}
        <Route path="/Property" element={<Property />} />{" "}
        <Route path="about" element={<About />} />{" "}
        <Route path="*" element={<Nomatch />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
