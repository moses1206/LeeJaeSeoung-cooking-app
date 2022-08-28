export default function Flex() {
  return (
    <div>
      <div className="flex  bg-blue-200">
        <h1>My Blog</h1>
      </div>
      <div className="flex my-5 ">
        <div className="flex w-2/5 bg-red-200">
          <h1>Left Menu</h1>
        </div>
        <div className=" ml-2  w-3/5 ">
          <div className="flex  bg-gray-300">
            <h1 className="">List Item</h1>
            <div className="flex justify-end w-full ">
              <div className=" w-5 h-5  m-2 bg-black"></div>
              <div className=" w-5 h-5  m-2 bg-black"></div>
            </div>
          </div>

          <div className="flex  bg-gray-300">
            <h1 className="">List Item</h1>
            <div className="flex ">
              <div className=" w-5 h-5  m-2 bg-black"></div>
              <div className=" w-5 h-5  m-2 bg-black"></div>
            </div>
          </div>

          <div className="flex bg-gray-300">
            <h1 className="">List Item</h1>
            <div className="flex ">
              <div className=" w-5 h-5  m-2 bg-black"></div>
              <div className=" w-5 h-5  m-2 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
