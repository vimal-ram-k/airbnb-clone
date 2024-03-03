import { Link } from "react-router-dom";
import { useState } from "react";
import search_logo from "../assets/nav-logos/icons8-search.svg";
import filter_logo from "../assets/nav-logos/icons8-filter-24.png";
import airbnb_logo from "../assets/airbnb-logo/airbnb-icon.svg";
import airbnb_name_logo from "../assets/airbnb-logo/airbnb-ar21.svg";
import global_logo from "../assets/nav-logos/icons8-global-48.png";
import menu_bar from "../assets/nav-logos/icons8-menu-bar.svg";
import user_profile_logo from "../assets/nav-logos/icons8-user-profile-48.png";
import { AddDetails } from "./addfilterdetails";
import Useroptions from "./useroptions";

const Navigationbar = () => {
  const [searchDetails, setSearchDetails] = useState({
    location: "Anywhere",
    travel_date: "Any week",
    guests_count: "Add guests",
  });

  function setdetails(variable: string, value: string) {
    setSearchDetails((prevDetails) => ({
      ...prevDetails,
      [variable]: value,
    }));
  }

  const [addDetailsMenu, setAddDetailsMenu] = useState(false);
  const [userOptionShow, setUserOptionShow] = useState(false);
  function HandleMenuFilter() {
    setAddDetailsMenu((prevAddDetailsmenu) => !prevAddDetailsmenu);
  }

  function HandleUserOptionShow() {
    setUserOptionShow((prevUserOptionShow) => !prevUserOptionShow);
  }

  return (
    <div className=" border-bottom" style={{}}>
      <div
        className=" container-fluid bg-white d-flex align-items-center px-3  position-fixed px-md-4 px-lg-5 py-3"
        style={{ top: "0px" }}
      >
        {/* Logo section */}
        <div>
          <img
            src={airbnb_logo}
            className=" d-none d-md-block d-xl-none"
            width={30}
            alt=""
          />
          <img
            src={airbnb_name_logo}
            className=" d-none d-xl-block"
            width={120}
            alt=""
          />
        </div>
        {/* Mobileview filter section */}
        <div
          className=" container-fluid d-flex d-md-none align-items-center border column-gap-2 px-3 rounded-5 bg-white shadow"
          onClick={HandleMenuFilter}
          style={{ height: "55px", width: "83%" }}
        >
          <img src={search_logo} width={25} alt="" />
          <div className=" d-flex flex-column row-gap-1">
            <h1 className=" fw-medium  m-0 " style={{ fontSize: "0.9rem" }}>
              {searchDetails.location}
            </h1>
            <h4 className=" fw-lighter m-0" style={{ fontSize: "0.7rem" }}>
              <ul className=" d-flex gap-4 p-0 m-0 ">
                <li className=" list-unstyled">{searchDetails.travel_date}</li>
                <li className="">{searchDetails.guests_count}</li>
              </ul>
            </h4>
          </div>
        </div>
        {/* Mobileview filter button */}
        <div className="d-md-none">
          <img
            onClick={setdetails}
            src={filter_logo}
            className=" border rounded-circle border-black "
            style={{ padding: "10px" }}
            width={40}
            alt=""
          />
        </div>
        {/* Large screeen navigation list */}
        <div className=" container-fluid d-none d-md-block p-0">
          <ul className="d-flex justify-content-md-center align-items-center column-gap-4 p-0 m-0 ">
            <li className=" d-none d-lg-block">
              <Link to="/" className=" text-black text-decoration-none">
                Stays
              </Link>
            </li>
            <li className=" d-none d-lg-block">
              <Link to="/" className=" text-black text-decoration-none">
                Experiences
              </Link>
            </li>
            <li className=" d-none d-lg-block me-5">
              <Link to="/" className=" text-black text-decoration-none">
                Online Experiences
              </Link>
            </li>
          </ul>
        </div>

        {/* Large screen user logo section */}
        <div className=" d-none d-md-block">
          <ul className=" d-flex align-items-center column-gap-3 m-0 p-0">
            <li className=" list-unstyled ">
              <Link
                to="/"
                className=" text-black text-decoration-none text-nowrap "
                style={{ fontSize: "0.9rem" }}
              >
                Airbnb your home
              </Link>
            </li>
            <li className=" list-unstyled">
              <img src={global_logo} width={18} alt="" />
            </li>
            <div className=" border px-3  py-2 rounded-5">
              <ul className=" d-flex p-0 column-gap-2 m-0 align-items-center">
                <li className=" list-unstyled">
                  <img src={menu_bar} width={20} alt="" />
                </li>
                <li className=" list-unstyled " onClick={HandleUserOptionShow}>
                  <img src={user_profile_logo} width={30} alt="" />
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      {userOptionShow && <Useroptions />}

      {addDetailsMenu && (
        <AddDetails
          func={HandleMenuFilter}
          setdetails={setdetails}
          searchDetails={searchDetails}
        />
      )}
    </div>
  );
};

// const LargeScreenFilter = () => {
//   return (
//     <div
//       className="d-none d-md-block bg-secondary-subtle container-fluid  px-5  border py-3"
//       style={{ height: "90px" }}
//     >
//       <div className="">
//         <ul className="d-flex justify-content-center  p-0 m-0">
//           <li className=" list-unstyled border bg-white h-100 rounded-5">
//             <h1 className=" fw-medium fs-6 m-0">Where</h1>
//             <input
//               type="text"
//               placeholder=" Search destinations"
//               className=" border-0 bg-transparent"
//               style={{ outline: "0px" }}
//             />
//           </li>
//           <li className=" list-unstyled">
//             <h1 className=" fw-medium fs-6 m-0">Check in</h1>
//             <input
//               type="text"
//               placeholder="Add dates"
//               className=" border-0 bg-transparent"
//               style={{ outline: "0px" }}
//             />
//           </li>
//           <li className=" list-unstyled">
//             <h1 className=" fw-medium fs-6 m-0">Check out</h1>
//             <input
//               type="text"
//               placeholder="Add dates"
//               className=" border-0 bg-transparent"
//               style={{ outline: "0px" }}
//             />
//           </li>
//           <li className=" list-unstyled">
//             <h1 className=" fw-medium fs-6 m-0">Who</h1>
//             <input
//               type="text"
//               placeholder="Add guest"
//               className=" border-0 bg-transparent"
//               style={{ outline: "0px" }}
//             />
//           </li>
//           <li className=" list-unstyled">
//             <button className=" border-0 bg-danger px-3 rounded-5 py-3 d-flex align-items-center column-gap-2">
//               <img src={search_logo} width={20} alt="" />
//               <h1 className=" fw-medium fs-6 m-0 text-white ">Search</h1>
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

export default Navigationbar;
