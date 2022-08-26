export default function Flex() {
  return (
    <div className="">
      <h1>Stretch all, fixed spacing</h1>
      <div className="flex flex-wrap justify-between">
        <div className="w-5/12 h-[100px] mb-[2%] bg-red-700">1</div>
        <div className="w-5/12 h-[100px] mb-[2%] bg-blue-700">2</div>
        <div className="w-5/12 h-[100px] mb-[2%] bg-blue-700">3</div>
        <div className="w-5/12 h-[100px] mb-[2%] bg-blue-700">4</div>
        <div className="w-5/12 h-[100px] mb-[2%] bg-blue-700">5</div>
      </div>
    </div>
  );
}
