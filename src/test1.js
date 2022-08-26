export default function Menu({ a }) {
  useEffect(() => {
    console.log(a);
  }, []);
  return (
    <div className="m-1">
      <h2 className="font-bold flex space-x-3">
        <div className="text-5xl">🥘</div>
        <div className="text-2xl self-center">메뉴</div>
      </h2>
    </div>
  );
}
