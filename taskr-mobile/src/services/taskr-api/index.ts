import useAxiosAuth from "@/hooks/useAxiosAuth";
import { IAuthResponse } from "@/types";

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

  function getTasks() {}
  function getLists() {}
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
