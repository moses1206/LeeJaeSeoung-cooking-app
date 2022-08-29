import React from "react";

export default function Cooking({ item }) {
  return (
    <>
      <div>메뉴</div>
      <h2>{item.title}</h2>
    </>
  );
}
