import React from "react";

export default function FriendsItem({ item }) {
  return (
    <li>
        <img src={item.imageUrl} alt="Company Logo" />
      <h3>{item.title}</h3>
      <p>{item.time}</p>
      <p>{item.address}</p>
      <p>{item.email}</p>
      <p>{item.phone}</p>
    </li>
  );
}
