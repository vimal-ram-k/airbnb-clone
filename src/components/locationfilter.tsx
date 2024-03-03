import search_logo from "../assets/nav-logos/icons8-search.svg";
import india_state_list from "../api/location.json";
import filter_map_logo from "../assets/filter-logo/location-svgrepo-com.svg";
import { useState } from "react";
const LocationFilter = ({
  setdetails,
  locationFilterHandler,
}: {
  setdetails: () => void;
  locationFilterHandler: () => void;
}) => {
  const [inputLocation, setInputLocation] = useState("");

  return (
    <div
      className=" position-absolute w-100 h-100 bg-white rounded-4 p-4 "
      style={{ top: "60px", left: "0" }}
    >
      <div
        className=" bg-secondary-subtle d-flex align-items-center px-4 rounded-3 column-gap-2"
        style={{ height: "50px" }}
      >
        <img src={search_logo} width={20} alt="" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search destinations"
          className=" border-0 bg-transparent fw-light"
          autoFocus
          onChange={(e) => {
            setInputLocation(e.target.value);
          }}
          style={{ outline: "none" }}
        />
      </div>

      <div>
        <ul className=" mt-3 overflow-y-scroll m-0 p-0">
          {inputLocation !== ""
            ? india_state_list
                .filter((items) =>
                  items
                    .toLocaleLowerCase()
                    .includes(inputLocation.toLocaleLowerCase())
                )
                .map((items, index) => {
                  return (
                    <li
                      className=" list-unstyled  p-2 d-flex align-items-center column-gap-3 location_seleted"
                      key={items + index}
                      value={items}
                      onClick={() => {
                        setdetails("location", items);
                        locationFilterHandler();
                      }}
                    >
                      <img
                        src={filter_map_logo}
                        width={40}
                        className=" bg-secondary-subtle p-2 border-0 rounded-2"
                        alt=""
                      />
                      {items}
                    </li>
                  );
                })
            : null}
        </ul>
      </div>
    </div>
  );
};
export default LocationFilter;
