import React from "react";
import { Link } from "react-router-dom";

export default function RoomList({ rooms }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {rooms.map((room) => (
        <Link to={`/room/${room._id}`}>
          <div
            key={room._id}
            className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Room Image */}
            <div className="h-48 bg-gray-200">
              <img
                src={`https://hotel-backend-api.onrender.com/${room.images[0]}`} // adjust path if needed
                alt={room.roomtype}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Room Details */}
            <div className="p-4">
              <h3 className="text-lg font-bold">{room.roomtype}</h3>
              <p className="text-gray-600">Capacity: {room.capacity} guests</p>
              <p className="text-primary font-semibold mt-1">
                ₹{room.price.toLocaleString()}
              </p>

              {/* Bookings */}
              {room.bookings.length > 0 && (
                <div className="mt-2 text-sm text-gray-500">
                  <p className="font-medium">Booked Dates:</p>
                  <ul className="list-disc list-inside">
                    {room.bookings.map((booking, index) => (
                      <li key={index}>
                        {booking.from} → {booking.to}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Offer */}
              {room.offer > 0 && (
                <div className="mt-3 text-green-600 font-semibold">
                  {room.offer}% OFF
                </div>
              )}

              {/* Action Button */}
              <button className="w-full bg-blue-500 text-white rounded-xl py-2 mt-4 hover:bg-blue-600 transition">
                Book Now
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
