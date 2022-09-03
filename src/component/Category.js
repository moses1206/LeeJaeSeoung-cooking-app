import Button from "./Button";
import Cooking from "./Cooking";

export default function Category({ foodType, setFoodType, foodMenu }) {
  // 과제 : 3개의 버튼의 코드 중복 없애기

  return (
    <div className='w-52 bg-black'>
      <h2 className='my-4 text-white mx-5'>카테고리</h2>
      <div className='flex flex-col mx-5 space-y-3'>
        {/* const arr = [
        {day : 1},
        {day : 2},
        {dat : 3},
        {day : 4},
        {dat : 5}
    ];
    let result = arr.filter(function (data) { // result = [dat : 3,5]
        if(data.dat){ // 조건
            return true;  //조건을 만족하면 true
        } */}
        {/* }) */}

        {/* 중복되는 값 지우기 */}
        <Button
          disabled={foodType === "koreaFood"}
          onClick={() => {
            setFoodType("koreaFood");
          }}
        >
          한식 ({foodMenu.filter((item) => item.category === "한식").length})
        </Button>

        <Button
          disabled={foodType === "japanFood"}
          onClick={() => {
            setFoodType("japanFood");
          }}
        >
          일식 ({foodMenu.filter((item) => item.category === "일식").length})
        </Button>
        <Button
          disabled={foodType === "chineseFood"}
          onClick={() => {
            setFoodType("chineseFood");
          }}
        >
          중식 ({foodMenu.filter((item) => item.category === "중식").length})
        </Button>
      </div>
    </div>
  );
}
