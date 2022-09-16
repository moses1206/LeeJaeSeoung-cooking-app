import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useMenus() {
  const result = useQuery(["menus"], () =>
    axios.get("/api/menus").then(({ data }) => data.menus)
  );
  return [result.data ?? [], result];
}

/*
// 동기 , 비동기 :

axios.get("/api/menus1");
axios.get("/api/menus2");
axios.get("/api/menus3");

// Promise: 비동기 상태를 값으로 다룰수 있게 해줌. 객체. 3가지 상태. (resolve)fullfill , reject , pending
const p1 = Promise.resolve();
const p2 = Promise.reject();
const p3 = new Promise((resolve, reject) => {
  // resolve, reject
  setTimeout(resolve, 1000);
  // return axios.get("/api/menus1").then(data => {
  //   resolve(data);
  // });
});

const p4 = axios
  .get("/api/menus")
  .then(() => {
    return axios.get();
  })
  .then(() => {
    return axios.get();
  })
  .then(() => {});

async function f1() {
  // const v1 = axios.get();
  const v1 = await axios.get().then(({data}) => data.menus);
  await axios.get();
}
*/
