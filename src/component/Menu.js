import Button from "./Button";

export default function Menu() {
  return (
    <div className="bg-gray-500">
      <h2>메뉴</h2>
      <div>
        <div>김치찌개</div>
        <div>조리시간:3초</div>
        <div>가격:7000원</div>
        <div className="flex">
          <Button>조리 시작</Button>
          <Button>메뉴 삭제</Button>
        </div>
      </div>

      <div>
        <div>된장찌개</div>
        <div>조리시간:10초</div>
        <div>가격:8000원</div>
        <div className="flex">
          <Button>조리 시작</Button>
          <Button>메뉴 삭제</Button>
        </div>
      </div>
      <div className="flex">
        <input placeholder="요리이름" className="bg-white" />
        <input placeholder="요리이름" className="bg-white" />
        <input placeholder="요리이름" className="bg-white" />
        <Button>메뉴 추가</Button>
      </div>
    </div>
  );
}
