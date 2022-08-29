import { useState } from "react";
import Button from "./Button";
import Cooking from "./Cooking";

export default function Category() {
  const [koreaFood, setKoreaFood] = useState([
    {
      foodName: "김치찌개",
      cookingTime: "3초",
      price: "7000원",
    },
    {
      foodName: "된장찌개",
      cookingTime: "10초",
      price: "8000원",
    },
  ]);
  const [japanFood, setJapanFood] = useState([
    {
      foodName: "초밥",
      cookingTime: "5초",
      price: "7000원",
    },
  ]);
  const [chineseFood, setChineseFood] = useState([]);

  const [koreaView, setKoreaView] = useState(false);

  const onKoreanFoodHandler = () => {};

  return (
    <div className='w-52 bg-black'>
      <h2 className='my-4 text-white mx-5'>카테고리</h2>
      <div className='flex flex-col mx-5 space-y-3'>
        <Button disabled={false} onClick={() => setKoreaView(true)}>
          한식 (2)
        </Button>

        <Button disabled={false} onClick={() => console.log("Button")}>
          일식 (1)
        </Button>
        <Button disabled={false} onClick={() => console.log("Button")}>
          중식 (0)
        </Button>
      </div>
    </div>
  );
}
