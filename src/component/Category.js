import Button from "./Button";

export default function Category() {
  return (
    <div className="w-52 bg-black">
      <h2 className="my-4 text-white mx-5">카테고리</h2>
      <div className="flex flex-col mx-5 space-y-3">
        <Button disabled={true} onClick={() => console.log("Button")}>
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
