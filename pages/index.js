import Category from "../src/component/Category";
import Header from "../src/component/Header";
import Menu from "../src/component/Menu";

export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex w-full '>
        <Category className='w-1/8' />
        <Menu className='w-7/8' />
      </div>
    </div>
  );
}
