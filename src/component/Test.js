import Style from "./Test.module.css";

export default function Test() {
  return (
    <div className="">
      <h1>Stretch all, fixed spacing</h1>
      <div className="flex flex-wrap justify-between">
        <div className={`${Style.item} bg-red-700`}>1</div>
        <div className={`${Style.item} bg-red-700`}>2</div>
        <div className={`${Style.item} bg-red-700`}>3</div>
        <div className={`${Style.item} bg-red-700`}>4</div>
        <div className={`${Style.item} bg-red-700`}>5</div>
      </div>
    </div>
  );
}
