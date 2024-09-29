import { atom } from "jotai";
import { addTodo, removeTodo, toggleTodo, renameTodo } from "./store";
import { InformationBar } from "@/types/informationBar";
import { Todo } from "@/types/todo";

export const newTodoAtom = atom<string>('');
export const todosAtom = atom<Todo[]>([]);
export const todoSearchQueryAtom= atom<string>('');

export const informationBarAtom = atom<InformationBar>((get) => {
  const totalTodosCount = get(todosAtom).length;
  const foundTodosCount = get(filteredBySearchTodosAtom).length;

  return { totalTodosCount, foundTodosCount };
});

export const resetSearchQueryAtom = atom(
  null,
  (_get, set) => {
    set(todoSearchQueryAtom, '');
  }
);

export const addTodoAtom = atom(
  null,
  (get, set) => {
    const updatedTodosList = addTodo(get(todosAtom), get(newTodoAtom));

    set(todosAtom, updatedTodosList);
    set(newTodoAtom, '');
  }
);

export const renameTodoAtom = atom(
  null,
  (get, set, todoInfo: { id: number, text: string }) => {
    const { id, text } = todoInfo;
    const todosList = get(todosAtom);
    const todosListWithRenamedTodo = renameTodo(todosList, id, text);

    set(todosAtom, todosListWithRenamedTodo);
  }
);

export const toggleTodoAtom = atom(
  null,
  (get, set, todoId: number) => {
    const todosList = get(todosAtom);
    const updatedTodosList = toggleTodo(todosList, todoId);

    set(todosAtom, updatedTodosList);
  }
);

export const removeTodoAtom = atom(
  null,
  (get, set, todoId: number) => {
    const todosList = get(todosAtom);
    const todosListWithoutRemoved = removeTodo(todosList, todoId);

    set(todosAtom, todosListWithoutRemoved);
  }
);

export const filteredBySearchTodosAtom = atom(((get) => {
  const searchQuery = get(todoSearchQueryAtom);
  const todos = get(todosAtom);

  if (!searchQuery) {
    return todos;
  }

  const filteredBySearchTodos = todos.filter((todo) => todo.text.includes(searchQuery));

  return filteredBySearchTodos;
}));
