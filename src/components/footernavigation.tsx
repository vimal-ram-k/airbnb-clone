import heart_logo from "../assets/compoent-logos/icons8-heart-50.png";
import search_logo from "../assets/nav-logos/icons8-search.svg";
import user_logo from "../assets/nav-logos/icons8-user-profile-48.png";

import "../custom-styles/animation.css";

function Footernavigation() {
  return (
    <div
      className=" d-md-none w-100 container-fluid  footer_loader_ani"
      id="footer_navigation"
      style={{ height: "80px" }}
    >
      <div className=" h-100">
        <ul className=" d-flex  justify-content-center align-items-center h-100 column-gap-5 m-0 p-0">
          <li className=" list-unstyled d-flex flex-column  align-items-center row-gap-1">
            <img src={search_logo} width={25} alt="" />
            <h1 className=" fw-lighter " style={{ fontSize: "0.7rem" }}>
              Explore
            </h1>
          </li>
          <li className=" list-unstyled d-flex flex-column  align-items-center row-gap-1">
            <img src={heart_logo} width={25} alt="" />
            <h1 className=" fw-lighter" style={{ fontSize: "0.7rem" }}>
              Wishlists
            </h1>
          </li>
          <li className=" list-unstyled d-flex flex-column  align-items-center row-gap-1">
            <img src={user_logo} width={25} alt="" />
            <h1 className=" fw-lighter" style={{ fontSize: "0.7rem" }}>
              Login
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footernavigation;
