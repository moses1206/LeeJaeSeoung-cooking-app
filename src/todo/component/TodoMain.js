import { useEffect, useRef, useState, useContext } from "react";
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

  const boxRef = useRef();
  const [boxWidth, setBoxwidth] = useState(0);
  useEffect(() => {
    const rect = boxRef.current.getBoundingClientRect();
    setBoxwidth(rect.width);
  }, []);

  return (
    <div ref={boxRef}>
      박스 크기: {boxWidth}
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
