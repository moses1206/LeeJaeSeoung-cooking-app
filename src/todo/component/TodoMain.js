import { useState, useContext } from "react";
import TodoList from "./TodoList";
import Button from "../../component/Button";
import { StateContext, DispatchContext } from "../state";

export default function TodoMain() {
  const { todoList } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [desc, setDesc] = useState("");
  function handleAddTodo() {
    const now = Date.now();
    dispatch({
      type: "addTodo",
      todo: {
        id: now,
        createdAt: now,
        desc,
      },
    });
    setDesc("");
  }
  return (
    <div>
      <TodoList />
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <Button onClick={handleAddTodo}>추가하기</Button>
    </div>
  );
}
