export type IList = {
  id?: string;
  _id?: string;
  title: string;
};

export type ITask = {
  id?: string;
  _id?: string;
  listId: string;
  title: string;
  completed: boolean;
};

export type IUser = {
  id: string;
  username: string;
};

export type IAuthResponse = {
  expiresIn: string;
  accessToken: string;
};

export type IAuthRegisterResponse = {};
