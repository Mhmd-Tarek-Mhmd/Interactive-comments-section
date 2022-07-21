import { loader } from "./loader.module.css";

function Loader() {
  return (
    <h1
      aria-atomic="true"
      aria-live="assertive"
      aria-label="Loading"
      className={loader}
    ></h1>
  );
}

export default Loader;
