import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetch(
          `https://hotel-backend-api.onrender.com/room/getRoom/${id}`
        );
        const data = await response.json();
        setRoom(data);
      } catch (error) {
        console.error("Error fetching room:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [id]);

  if (loading)
    return (
      <p className="text-center text-gray-400 mt-10">Loading room details...</p>
    );
  if (!room)
    return <p className="text-center text-red-500 mt-10">Room not found!</p>;

  const serviceCharge = 357;
  const total = room.price + serviceCharge;

  return (
    <div className="bg-[#121212] text-white min-h-screen p-6 flex flex-col md:flex-row gap-6">
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-6">
        {/* Room Title */}
        <div className="bg-[#1e1e1e] rounded-xl p-5 shadow-lg">
          <h1 className="text-2xl font-semibold mb-2">
            {room.roomtype} hosted by {room.host || "Novotel"}
          </h1>
          <p className="text-gray-400">
            {room.capacity} Guests • {room.bedrooms || 1} bedroom •{" "}
            {room.beds || 1} bed • {room.bathrooms || 1} bathroom
          </p>
        </div>

        {/* Highlights */}
        <div className="bg-[#1e1e1e] rounded-xl p-5 shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <span>📍</span>
            <div>
              <p className="font-medium">Great Location</p>
              <p className="text-gray-400 text-sm">
                95% of recent guests gave the location a 5-star rating
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span>🔑</span>
            <div>
              <p className="font-medium">Great check-in experience</p>
              <p className="text-gray-400 text-sm">
                95% of recent guests gave the check-in process a 5-star rating
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span>🅿️</span>
            <div>
              <p className="font-medium">Park for free</p>
              <p className="text-gray-400 text-sm">
                One of the few places in the area with free parking
              </p>
            </div>
          </div>
        </div>

        {/* Stay Information */}
        <div className="bg-[#1e1e1e] rounded-xl p-5 shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Stay information</h2>
          <p className="text-gray-300 leading-6">
            {room.description ||
              "This is a cozy stay with modern interiors and stunning views. Perfect for a relaxing vacation with friends or family."}
          </p>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-full md:w-96 bg-[#1e1e1e] rounded-xl p-6 shadow-lg h-fit">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">₹ {room.price}/night</p>
          <p className="flex items-center text-yellow-400 text-sm">
            ⭐ {room.rating || 4.5} ({room.reviews || 112})
          </p>
        </div>

        {/* Check-in / Check-out */}
        <div className="flex gap-2 mb-4">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="flex-1 p-2 rounded bg-[#2a2a2a] border border-gray-600"
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="flex-1 p-2 rounded bg-[#2a2a2a] border border-gray-600"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center gap-2 mb-4 bg-[#2a2a2a] p-2 rounded border border-gray-600">
          <span>👥</span>
          <p>Guests: {room.capacity}</p>
        </div>

        {/* Pricing */}
        <div className="space-y-2 border-t border-gray-700 pt-3 mb-4">
          <div className="flex justify-between">
            <p>₹ {room.price}</p>
            <p>₹ {room.price}</p>
          </div>
          <div className="flex justify-between text-gray-400">
            <p>Service charge</p>
            <p>₹ {serviceCharge}</p>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <p>Total</p>
            <p>₹ {total}</p>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-lg font-semibold transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
