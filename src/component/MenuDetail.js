import React, { useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { StateContext, DispatchContext } from "../../src/state";
import Button from "../../src/component/Button";
import useMenu from "../state/server/useMenu";

export default function MenuDetail({ id }) {
  const router = useRouter();
  const { menuList } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [menu] = useMenu(id);
  console.log("menu", menu);

  const [toggle, setToggle] = useState(false);
  const menuDetail = menuList.filter((item) => item.id === id);
  const { foodName, cookingTime, price, category } = menuDetail[0];

  console.log(toggle);

  const [fn, setFn] = useState("");
  const [ct, setCt] = useState("");
  const [pr, setPr] = useState("");
  const [cg, setCg] = useState("");

  console.log({ fn, ct, pr, cg });

  const handleMenuDetailUpdate = () => {
    const newMenuDetail = {
      id,
      foodName: fn,
      cookingTime: ct,
      price: pr,
      category: cg,
    };

    dispatch({
      type: "updateMenuDetail",
      value: newMenuDetail,
    });
    router.push("/");
  };

  return (
    <div>
      <div>
        <Button onClick={() => router.push("/")} className="mb-10 ">
          뒤로가기
        </Button>
        <div className="ml-10 ">
          <div className="font-bold mb-10">기본정보</div>
          {toggle ? (
            <div>
              <input
                type="text"
                placeholder="요리이름"
                className="bg-white"
                value={fn}
                onChange={(e) => setFn(e.target.value)}
              />
              <input
                type="number"
                placeholder="조리시간"
                className="bg-white"
                value={ct}
                onChange={(e) => setCt(e.target.value)}
              />
              <input
                type="number"
                placeholder="가격"
                className="bg-white"
                value={pr}
                onChange={(e) => setPr(e.target.value)}
              />
              <input
                type="text"
                placeholder="카테고리"
                className="bg-white"
                value={cg}
                onChange={(e) => setCg(e.target.value)}
              />
              <Button onClick={() => handleMenuDetailUpdate()}>업데이트</Button>
            </div>
          ) : (
            <div>
              <div>ID : {id}</div>
              <div className="flex mt-5">
                <div>메뉴이름 : {foodName}</div>
              </div>
              <div className="flex mt-5">
                <div>조리시간 : {cookingTime}</div>
              </div>
              <div className="flex mt-5">
                <div>가격 : {price}원</div>
              </div>
              <div className="flex mt-5">
                <div>카테고리 : {category}</div>
              </div>
              <Button onClick={() => setToggle(!toggle)}>수정하기</Button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-10 ml-10 font-bold">
        <div>변경내역</div>
      </div>
    </div>
  );
}
