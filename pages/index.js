import Category from "../src/component/Category";
import Header from "../src/component/Header";
import Menu from "../src/component/Menu";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Category />
        <Menu />
      </div>
    </div>
  );
}
