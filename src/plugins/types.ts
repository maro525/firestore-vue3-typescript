export interface Todo {
  content: string;
  finished: boolean;
}

export const TodoDocKey = Symbol('FirebaseDocTodo')