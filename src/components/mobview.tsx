import React from "react";
import { Link } from "react-router-dom";
import heart_logo from "../assets/compoent-logos/icons8-heart-50.png";
import star_logo from "../assets/compoent-logos/icons8-star-30.png";

interface hotel_details_props {
  hotelname: string;
  beds_count: number;
  price: number;
  image: string;
  rating: number;
}
function Mobview({ props }: { props: hotel_details_props }) {
  return (
    <div className=" pb-5 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
      <div
        className=" rounded-4"
        style={{
          backgroundImage: `url(${props.image})`,
          height: "40vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className=" d-flex align-items-center justify-content-between container"
          style={{ height: "50px" }}
        >
          <button className=" text-black bg-white rounded-5 px-3 border-0">
            Guest facvourite
          </button>
          <img src={heart_logo} width={25} alt="" />
        </div>
      </div>
      <div>
        <div className=" d-flex justify-content-between mt-2 ">
          <h1 className="" style={{ fontSize: "1rem" }}>
            {props.hotelname}
          </h1>
          <div className=" d-flex gap-1 align-items-center">
            <img src={star_logo} width={15} height={15} alt="" />
            <h1 className=" m-0" style={{ fontSize: "1rem" }}>
              {props.rating}
            </h1>
          </div>
        </div>
        <h1 className=" fw-lighter m-0" style={{ fontSize: "1rem" }}>
          {props.beds_count} {props.beds_count > 1 ? "beds" : "bed"}
        </h1>

        <h1 className=" d-flex m-0 gap-1 mt-2" style={{ fontSize: "1rem" }}>
          <h1 className=" m-0" style={{ fontSize: "1rem" }}>
            ${props.price}{" "}
            <span className=" fw-light" style={{ fontSize: "1rem" }}>
              night
            </span>
          </h1>
          <Link
            to="/"
            className=" text-secondary fw-light"
            style={{ fontSize: "1rem" }}
          >
            ${props.price} total
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Mobview;
