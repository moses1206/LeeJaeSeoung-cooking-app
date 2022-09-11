import Button from "./Button";
import Cooking from "./Cooking";
import { useContext } from "react";
import { StateContext, DispatchContext } from "../state";

export default function Category({ setFoodType }) {
  const { foodType, menuList } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  let filteredCategory = menuList.map((item) => item.category);

  const set = new Set(filteredCategory);
  const uniqueCategory = [...set];

  return (
    <div className='w-52 bg-black'>
      <h2 className='my-4 text-white mx-5'>카테고리</h2>
      <div className='flex flex-col mx-5 space-y-3'>
        {uniqueCategory.map((item) => {
          //한식 , 일식
          return (
            <Button
              key={item}
              disabled={foodType === item}
              onClick={() => dispatch({ type: "setFoodType", value: item })}
            >
              {item} ({menuList.filter((menu) => menu.category === item).length}
              )
            </Button>
          );
        })}
      </div>
    </div>
  );
}
