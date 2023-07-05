import useAxiosAuth from "@/hooks/useAxiosAuth";
import { IAuthResponse, IList, ITask } from "@/types";

const useTaskrAPI = () => {
  const axios = useAxiosAuth();

  async function login(data: { email: string; password: string }) {
    try {
      const response = await axios.post<IAuthResponse>("/auth/login", data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async function register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    try {
      const response = await axios.post<IAuthResponse>("/auth/register", data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  function getTasks(listId: string) {
    return axios.get<ITask[]>(`/tasks?listId=${listId}`);
  }
  function getLists() {
    return axios.get<IList[]>("/lists");
  }
  function getUserDetails() {}
  function getTask() {}
  function getList() {}
  function toggleTask() {}
  function updateTask() {}
  function updateList() {}

  return {
    login,
    register,
    getTasks,
    getLists,
    getUserDetails,
    getTask,
    getList,
    toggleTask,
    updateTask,
    updateList,
  };
};

export default useTaskrAPI;
