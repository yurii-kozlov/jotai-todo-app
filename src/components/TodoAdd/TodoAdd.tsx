"use client";

import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useAtom, useSetAtom } from "jotai";
import { addTodoAtom, newTodoAtom } from "@/store/todo";

export const TodoAdd = () => {
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);
  const addTodo = useSetAtom(addTodoAtom);

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <Button onClick={() => addTodo()}>
        Add Todo
      </Button>
    </Grid>
  );
};
