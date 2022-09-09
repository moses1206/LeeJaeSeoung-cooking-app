import { useContext } from "react";
import { StateContext } from "../state";

export default function TodoList() {
  const { todoList } = useContext(StateContext);

  return todoList.map((item) => (
    <div key={item.id}>
      <div>{item.desc}</div>
      <div>{item.createdAt}</div>
    </div>
  ));
}
