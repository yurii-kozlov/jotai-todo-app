'use client'

import { Heading } from "@chakra-ui/react";
import { TodoListItem } from "./TodoListItem";
import { useAtomValue } from "jotai";
import { filteredBySearchTodosAtom } from "@/store/todo";

export const TodoList = () => {
  const todos = useAtomValue(filteredBySearchTodosAtom);

  return (
    <>
      <Heading>Todo List</Heading>
      {todos.length > 0 && todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />)}
    </>
  );
};
