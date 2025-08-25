import dupp from "../dupp.png";
import { btn } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const [location, setLocation] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = async () => {
    if (!location) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://hotel-backend-api.onrender.com/hotel/hotelByCity?city=${encodeURIComponent(
          location
        )}`
      );
      const data = await res.json();
      setHotels(data);
    } catch (err) {
      setHotels([]);
    }
    setLoading(false);
  };

  const navigate = useNavigate();

  const handleHotelClick = (hotel) => {
    navigate(`/hotel/${hotel._id}`, { state: { hotel } });
  };

  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1 className="hero-h1 my-3">
            It's a Big World Out There, Go Explore
          </h1>
          <p className="para mt-2">
            We always make our customer happy by providing
            <br />
            as many choices as possible
          </p>
          <button className="btn btn-lg btn-primary border-3 mt-3">
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
            <span className="material-symbols-outlined fs-1">location_on</span>
          </div>
          <div>
            <input
              type="text"
              className="border-0 bg-dark text-white"
              placeholder="   Location"
              value={location}
              onChange={handleLocationChange}
            />
            <p className="m-0">Where are you going</p>
          </div>
        </div>
        <div className="filter d-flex">
          <div className="d-flex text-white justify-content-center align-items-center">
            <span className="material-symbols-outlined fs-1">filter_alt</span>
          </div>
          <div>
            <input
              type="text"
              className="border-0 bg-dark text-white"
              placeholder="   Filter"
              disabled
            />
            <p className="m-0">Search by hotel name</p>
          </div>
        </div>
        <div
          className="search d-flex rounded-circle btn btn-primary justify-content-center align-items-center"
          style={{ cursor: "pointer" }}
          onClick={handleSearch}
        >
          <span className="material-symbols-outlined">search</span>
        </div>
      </div>
      <div className="container mt-4">
        {loading && <div>Loading...</div>}
        {!loading && hotels && hotels.length > 0 && (
          <div>
            <h4>Hotels in {location}</h4>
            <ul className="list-group">
              {hotels.map((hotel) => (
                <li
                  key={hotel._id}
                  className="list-group-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleHotelClick(hotel)}
                >
                  <img
                    src={`https://hotel-backend-api.onrender.com/${hotel.images[0]}`}
                    alt={hotel.name}
                  />
                  <strong>{hotel.name}</strong>
                  <div>{hotel.address}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!loading && hotels && hotels.length === 0 && location && (
          <div>No hotels found for "{location}"</div>
        )}
      </div>
    </>
  );
}
