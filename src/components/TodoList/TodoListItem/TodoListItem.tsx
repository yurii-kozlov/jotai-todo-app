'use client';

import { Button, Input, Flex, Checkbox } from "@chakra-ui/react";

import { ChangeEvent, FC } from "react";
import { useSetAtom } from "jotai";
import { removeTodoAtom, renameTodoAtom, toggleTodoAtom } from "@/store/todo";
import { Todo } from "@/types/todo";

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {
  const { text, done, id: todoId } = todo;

  const renameTodo = useSetAtom(renameTodoAtom);
  const toggleTodo = useSetAtom(toggleTodoAtom);
  const removeTodo = useSetAtom(removeTodoAtom);

  const handleTodoRename = (event: ChangeEvent<HTMLInputElement>): void => {
    renameTodo({ id: todoId, text: event.target.value });
  }

  return (
    <Flex pt={2}>
      <Checkbox checked={done} onChange={() => toggleTodo(todoId)} />
      <Input mx={2} value={text} onChange={handleTodoRename} />
      <Button onClick={() => removeTodo(todoId)}>
        Delete
      </Button>
    </Flex>
  );
};
