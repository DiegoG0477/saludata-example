import "./App.css";
import "primeicons/primeicons.css";
import Head from "./components/Head";
import LeftNav from "./components/LeftNav";

function Render({ component }) {
  return (
    <>
      <div className="app">
        <div className="sticky-top">
          <Head/>
        </div>

        <div className="frame">
        <LeftNav></LeftNav>
          {component}
        </div>
      </div>
    </>
  );
}

export default Render;
