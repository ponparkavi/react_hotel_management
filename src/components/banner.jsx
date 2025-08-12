import dupp from "../dupp.png";
import { btn } from "react-bootstrap";

export default function Banner() {
  return (
    <>
      <div class="hero">
        <div class="hero-text">
          <h1 class="hero-h1 my-3">It's a Big World Out There, Go Explore</h1>
          <p class="para mt-2">
            We always make our customer happy by providing<br></br>
            as many choices as possible
          </p>
          <button class="btn btn-lg btn-primary border-3 mt-3">
            Explore now
          </button>
        </div>
        <div>
          <img src={dupp} alt="image" />
        </div>
      </div>
      <div className="user_input py-3 px-4 bg-dark d-flex justify-content-between align-items-center">
        <div className="location d-flex">
          <div className="d-flex text-white justify-content-center align-items-center">
            <span class="material-symbols-outlined fs-1">location_on</span>
          </div>
          <div className="">
            <input
              type="text"
              className="border-0 bg-dark text-white"
              placeholder="   Location"
            />
            <p className="m-0">Where are you going</p>
          </div>
        </div>
        <div className="filter d-flex">
          <div className="d-flex text-white justify-content-center align-items-center">
            <span className="material-symbols-outlined fs-1 ">filter_alt</span>
          </div>
          <div className="">
            <input
              type="text"
              className="border-0 bg-dark text-white "
              placeholder="   Filter"
            />
            <p className="m-0">Search by hotel name</p>
          </div>
        </div>
        <div className="search d-flex rounded-circle btn btn-primary justify-content-center align-items-center">
          <span class="material-symbols-outlined">search</span>
        </div>
      </div>
    </>
  );
}
