'use client';

import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useSetAtom } from "jotai";
import { todosAtom } from "@/store/todo";
import { Todo } from "@/types";

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

export const TopBar = () => {
  const setTodos = useSetAtom(todosAtom);

  const fetchTodos = (): void => {
    fetch('https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json')
      .then((response) => response.json())
      .then((todos: Todo[]) => setTodos(todos));
  }

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={fetchTodos}>Load</Button>
    </Grid>
  );
}
