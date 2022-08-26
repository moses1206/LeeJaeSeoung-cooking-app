export default function Flex() {
  return (
    <div className="space-y-8">
      <h1>Stretch all, fixed spacing</h1>
      <div className="flex space-x-2">
        <div className="h-full w-10 bg-red-500">1</div>
        <div className="h-full w-10 bg-blue-700">2</div>
        <div className="h-full grow bg-blue-700">2</div>
        <div className="h-full w-10 bg-blue-700">2</div>
        <div className="h-full w-10 bg-blue-700">2</div>
      </div>
    </div>
  );
}
