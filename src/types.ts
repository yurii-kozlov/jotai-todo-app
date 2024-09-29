export interface Todo {
  id: number;
  text: string;
  done: boolean;
};

export interface InformationBar {
  foundTodosCount: number;
  totalTodosCount: number;
};
