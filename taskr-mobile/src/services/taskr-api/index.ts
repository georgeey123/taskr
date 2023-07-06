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
  function toggleTask(taskId: string, completed: boolean) {
    return axios.patch(`/tasks/${taskId}`, {
      completed: !completed,
    });
  }
  function updateTask() {}
  function updateList() {}
  function postList(listTitle: string) {
    return axios.post<IList>("/lists", {
      title: listTitle,
    });
  }
  function postTask(data: { listId: string; title: string }) {
    return axios.post<ITask>("/tasks", data);
  }

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
    postList,
    postTask,
  };
};

export default useTaskrAPI;
