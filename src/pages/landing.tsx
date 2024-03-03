import Mobview from "../components/mobview";
import data from "../api/hotel.json";

function Landing() {
  return (
    <div className=" p-4  d-md-grid ">
      <div className=" row">
        {data.map((items) => {
          return <Mobview props={items} />;
        })}
      </div>
    </div>
  );
}

export default Landing;
