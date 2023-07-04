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

export type IUser = {
  id: string;
  username: string;
};

export type IAuthResponse = {
  expiresIn: string;
  accessToken: string;
};

export type IAuthRegisterResponse = {};
