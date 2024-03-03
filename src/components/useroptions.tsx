import { Link } from "react-router-dom";
const listofOption = ["Sign Up", "Log In", "Airbnb your home", "Help Center"];
function Useroptions() {
  return (
    <div
      className=" position-fixed bg-white p-3 rounded-3 shadow-lg d-none d-md-block"
      style={{ right: "30px", top: "90px", width: "230px", height: "190px" }}
    >
      <ul className=" d-flex flex-column row-gap-3 p-0 m-0">
        {listofOption.map((items, index) => {
          return (
            <li
              className={`list-unstyled text-decoration-none 
               ${index === 1 ? "border-bottom pb-3" : ""}
              `}
              key={items + index}
            >
              <Link
                className=" text-decoration-none text-black fw-light  "
                style={{ fontSize: "0.9rem" }}
                to={"/"}
              >
                {items}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Useroptions;
