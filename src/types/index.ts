export type IList = {
  id: string;
  title: string;
};

export type ITodo = {
  id: string;
  listID: string;
  title: string;
  isDone: boolean;
};
