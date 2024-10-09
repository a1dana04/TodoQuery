"use client"
import { useGetTodosQuery, usePostTodoMutation } from "@/redux/api/todo";
import React, { useEffect, useState } from "react";

const TodoAdd = () => {
  const [addTodoMutation] = usePostTodoMutation();
  const [todoInput, setTodoInput] = useState("");
  const [todoInput1, setTodoInput1] = useState("");

  const AddTodo = async () => {
    const newTodo = {
      title: todoInput,
      description:todoInput,
    };
    await addTodoMutation(newTodo);
    setTodoInput("")
    setTodoInput1("")
  };

 
  return (
    <div className="container">
      <h1 className=" pt-10 text-center font-extrabold text-5xl pb-10">To Do List</h1>
      <div className=" flex items-center justify-center gap-5">
        <input 
        className=" w-96 h-12 bg-transparent border-2 outline-none px-4 rounded-lg"
          type="text"
          placeholder="text.."
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
        />
         <input
         className=" w-96 h-12 bg-transparent border-2 outline-none px-4 rounded-lg"
          type="text"
          placeholder="text.."
          onChange={(e) => setTodoInput1(e.target.value)}
          value={todoInput1}
        />
        <button className="w-28 h-10 bg-white text-black rounded-lg font-extrabold outline-none" onClick={AddTodo}>Add</button>
      </div>
    </div>
  );
};

export default TodoAdd;
