import { useState } from "react";
import { Link } from "react-router-dom";
import cross_logo from "../assets/nav-logos/cross-23.svg";
import search_logo from "../assets/nav-logos/icons8-search.svg";
import map from "../assets/map-filter-image/high-quality-map-of-tamil-nadu-is-a-state-of-india-with-borders-of-the-districts-T4WYDD.jpg";
import LocationFilter from "./locationfilter";

type searchDetailsProps = {
  location: string;
  travel_date: string;
  guests_count: string;
};

const days = ["Sun", "Mon", "Tue", "Wed", "Tue", "Fri", "Sat"];
export const AddDetails = ({
  func,
  setdetails,
  searchDetails,
}: {
  func: () => void;
  setdetails: () => void;
  searchDetails: searchDetailsProps;
}) => {
  const [addguest, setAddguest] = useState(false);
  const [locationFilter, setLocationFilter] = useState(false);

  const [guestlist, setGuestList] = useState({
    adult: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  function locationFilterHandler() {
    setLocationFilter((prevLocationFilterState) => !prevLocationFilterState);
  }

  return (
    <div className=" d-md-none position-absolute bg-secondary-subtle top-0 px-3 pt-3 h-100 z-3 w-100 overflow-hidden ">
      <div className=" d-flex align-items-center" style={{ height: "50px" }}>
        <img
          src={cross_logo}
          width={30}
          alt=""
          onClick={func}
          className=" border p-2 rounded-5"
        />
        <ul className="d-flex justify-content-center w-100 gap-4 p-0 m-0 ">
          <li className=" list-unstyled ">
            <Link to="/" className=" text-decoration-none text-black">
              Stays
            </Link>
          </li>
          <li className=" list-unstyled ">
            <Link to="/" className=" text-decoration-none text-black">
              Experiences
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`bg-white rounded-3 p-3  ${
          searchDetails.location !== "Anywhere" ? "visually-hidden" : ""
        }`}
      >
        <h1 className=" fw-semibold" style={{ fontSize: "1.4rem" }}>
          Where to?
        </h1>
        <div className=" border p-3 rounded-3 d-flex align-items-center column-gap-2">
          <img src={search_logo} width={20} alt="" />
          <input
            type="text"
            className=" border-0"
            style={{ outline: "none" }}
            onClick={locationFilterHandler}
            placeholder="Search destinations"
          />
        </div>

        <ul
          className=" d-flex flex-nowrap overflow-x-scroll column-gap-3 pt-4 m-0 p-0"
          style={{ scrollbarWidth: "none" }}
        >
          <li className=" list-unstyled">
            <img src={map} width={120} alt="" className=" rounded-4" />
            <h1 className=" fw-light pt-2" style={{ fontSize: "0.9rem" }}>
              I'm flexible
            </h1>
          </li>
          <li className=" list-unstyled">
            <img src={map} width={120} alt="" className=" rounded-4" />
            <h1 className=" fw-light pt-2" style={{ fontSize: "0.9rem" }}>
              I'm flexible
            </h1>
          </li>
          <li className=" list-unstyled">
            <img src={map} width={120} alt="" className=" rounded-4" />
            <h1 className=" fw-light pt-2" style={{ fontSize: "0.9rem" }}>
              I'm flexible
            </h1>
          </li>
          <li className=" list-unstyled">
            <img src={map} width={120} alt="" className=" rounded-4" />
            <h1 className=" fw-light pt-2" style={{ fontSize: "0.9rem" }}>
              I'm flexible
            </h1>
          </li>
          <li className=" list-unstyled">
            <img src={map} width={120} alt="" className=" rounded-4" />
            <h1 className=" fw-light pt-2" style={{ fontSize: "0.9rem" }}>
              I'm flexible
            </h1>
          </li>
          <li className=" list-unstyled">
            <img src={map} width={120} alt="" className=" rounded-4" />
            <h1 className=" fw-light pt-2" style={{ fontSize: "0.9rem" }}>
              I'm flexible
            </h1>
          </li>
        </ul>
      </div>
      <div
        className={` bg-white mt-3 rounded-3 p-3 d-flex justify-content-between align-items-center ${
          searchDetails.location === "Anywhere" ? "visually-hidden" : ""
        } `}
      >
        <h1 className=" fw-light m-0" style={{ fontSize: "1rem" }}>
          Where
        </h1>
        <h1 className=" fw-bold" style={{ fontSize: "0.9rem" }}>
          {searchDetails.location}
        </h1>
      </div>

      <div className=" bg-white mt-3 rounded-3 p-3 d-flex justify-content-between align-items-center visually-hidden">
        <h1 className=" fw-light m-0" style={{ fontSize: "1rem" }}>
          When
        </h1>
        <button className=" border-0 bg-transparent fw-bold">Add dates</button>
      </div>

      <div className=" bg-white mt-3 rounded-4 d-flex flex-column row-gap-2">
        <h1 className=" fw-bold container pt-3" style={{ fontSize: "1.2rem" }}>
          When's your trip?
        </h1>
        <div className="">
          <ul
            className=" d-flex justify-content-center align-items-center column-gap-4 bg-secondary-subtle  m-auto rounded-5 px-3 py-2 "
            style={{ width: "80%", height: "35px" }}
          >
            <li
              className=" list-unstyled bg-white rounded-5 px-3 fw-bold"
              style={{ fontSize: "0.9rem" }}
            >
              Dates
            </li>
            <li
              className=" list-unstyled bg-white rounded-5 px-3 fw-bold py-1"
              style={{ fontSize: "0.9rem" }}
            >
              Months
            </li>
            <li
              className=" list-unstyled bg-white rounded-5 px-3 fw-bold py-1"
              style={{ fontSize: "0.9rem" }}
            >
              Flexible
            </li>
          </ul>
        </div>

        <div className=" container">
          <div className=" w-100">
            <ul className="row justify-content-between p-0 m-0 ">
              {days.map((items, index) => {
                return (
                  <li
                    className=" col-1 list-unstyled fw-light"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {items}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {!addguest && (
        <div className="bg-white mt-3 rounded-3 p-3 d-flex justify-content-between align-items-center">
          <h1 className="fw-light m-0" style={{ fontSize: "1rem" }}>
            Who
          </h1>
          <button
            className=" border-0 bg-transparent fw-bold"
            onClick={() => {
              setAddguest((prevAddguest) => !prevAddguest);
            }}
          >
            Add guests
          </button>
        </div>
      )}

      {locationFilter && (
        <LocationFilter
          locationFilterHandler={locationFilterHandler}
          setdetails={setdetails}
          setLocationFilter={setLocationFilter}
        />
      )}

      {addguest && (
        <div className=" bg-white mt-3 rounded-4 p-3 ">
          <h1 className=" m-0 " style={{ fontSize: "1.5rem" }}>
            Who's coming?
          </h1>
          <div className=" mt-3 border-bottom">
            <ul className=" p-0">
              <li className=" list-unstyled">
                <div className="d-flex justify-content-between ">
                  <section>
                    <h1 className=" fw-bold" style={{ fontSize: "1rem" }}>
                      Adults
                    </h1>
                    <h3 className="fw-lighter" style={{ fontSize: "0.9rem" }}>
                      Ages 13 or above
                    </h3>
                  </section>

                  <div className=" d-flex column-gap-2 align-items-center">
                    <button
                      className=" rounded-5 border-1 border-secondary-subtle"
                      style={{ height: "30px", width: "30px" }}
                    >
                      -
                    </button>
                    <h1
                      className=" m-0  fw-light"
                      style={{ fontSize: "1.2rem" }}
                    >
                      0
                    </h1>
                    <button
                      className=" rounded-5 border-1 border-secondary-subtle"
                      style={{ height: "30px", width: "30px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className=" mt-3 border-bottom">
            <ul className=" p-0">
              <li className=" list-unstyled">
                <div className="d-flex justify-content-between ">
                  <section>
                    <h1 className=" fw-bold" style={{ fontSize: "1rem" }}>
                      Children
                    </h1>
                    <h3 className="fw-lighter" style={{ fontSize: "0.9rem" }}>
                      Ages 2-12
                    </h3>
                  </section>

                  <div className=" d-flex column-gap-2 align-items-center">
                    <button
                      className=" rounded-5 border-1 border-secondary-subtle"
                      style={{ height: "30px", width: "30px" }}
                    >
                      -
                    </button>
                    <h1
                      className=" m-0  fw-light"
                      style={{ fontSize: "1.2rem" }}
                    >
                      0
                    </h1>
                    <button
                      className=" rounded-5 border-1 border-secondary-subtle"
                      style={{ height: "30px", width: "30px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className=" mt-3 border-bottom">
            <ul className=" p-0">
              <li className=" list-unstyled">
                <div className="d-flex justify-content-between ">
                  <section>
                    <h1 className=" fw-bold" style={{ fontSize: "1rem" }}>
                      Infants
                    </h1>
                    <h3 className="fw-lighter" style={{ fontSize: "0.9rem" }}>
                      Under 2
                    </h3>
                  </section>

                  <div className=" d-flex column-gap-2 align-items-center">
                    <button
                      className=" rounded-5 border-1 border-secondary-subtle"
                      style={{ height: "30px", width: "30px" }}
                    >
                      -
                    </button>
                    <h1
                      className=" m-0  fw-light"
                      style={{ fontSize: "1.2rem" }}
                    >
                      0
                    </h1>
                    <button
                      className=" rounded-5 border-1 border-secondary-subtle"
                      style={{ height: "30px", width: "30px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className=" mt-3">
            <ul className=" p-0">
              <li className=" list-unstyled">
                <div className="d-flex justify-content-between ">
                  <section>
                    <h1 className=" fw-bold" style={{ fontSize: "1rem" }}>
                      Pets
                    </h1>
                    <h3 className="fw-lighter" style={{ fontSize: "0.9rem" }}>
                      <Link
                        className=" text-secondary-emphasis fw-light"
                        to={"/"}
                      >
                        Bringing a service animal?
                      </Link>
                    </h3>
                  </section>

                  <div className=" d-flex column-gap-2 align-items-center">
                    <button
                      className=" rounded-5 border-1 border-secondary-subtle"
                      style={{ height: "30px", width: "30px" }}
                    >
                      -
                    </button>
                    <h1
                      className=" m-0  fw-light"
                      style={{ fontSize: "1.2rem" }}
                    >
                      0
                    </h1>
                    <button
                      className=" rounded-5 border-1 border-secondary-subtle"
                      style={{ height: "30px", width: "30px" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      <footer
        className="position-absolute bottom-0 bg-white border-top w-100 container "
        style={{ height: "70px", left: "0" }}
      >
        <ul className=" d-flex justify-content-between p-0 m-0 align-items-center w-100 h-100">
          <li className=" list-unstyled">
            <button className=" border-0 bg-transparent text-decoration-underline fw-bold">
              Clear all
            </button>
          </li>
          <li className="list-unstyled">
            <button className=" d-flex align-items-center bg-danger text-white px-4 column-gap-2 border-0 rounded-3 py-3">
              <img src={search_logo} width={20} alt="" />
              <h1 className=" m-0" style={{ fontSize: "0.9rem" }}>
                Search
              </h1>
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
};
