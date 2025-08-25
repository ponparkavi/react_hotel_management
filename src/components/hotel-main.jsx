import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import RoomList from "./room-list.jsx";

const HotelMain = () => {
  const { id } = useParams();
  const location = useLocation();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://hotel-backend-api.onrender.com/room/getRooms/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setRooms(data || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div>Loading rooms...</div>;

  return (
    <div>
      <h2>Rooms for Hotel: {location.state?.hotel?.name || id}</h2>
      {rooms.length === 0 ? (
        <div>No rooms found.</div>
      ) : (
        <RoomList rooms={rooms} />
      )}
    </div>
  );
};

export default HotelMain;
