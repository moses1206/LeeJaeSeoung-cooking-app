import { useState, useContext } from "react";
import Cooking from "./Cooking";

export default function Menu({}) {
  return (
    <div className='bg-gray-200'>
      <h2>메뉴</h2>
      <Cooking />
    </div>
  );
}
