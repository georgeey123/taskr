import useAxiosAuth from "@/hooks/useAxiosAuth";
import { IAuthResponse } from "@/types";

class TaskrAPI {
  private axios = useAxiosAuth();

  public async login(data: { email: string; password: string }) {
    try {
      const response = await this.axios.post<IAuthResponse>(
        "/auth/login",
        data
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    try {
      const response = await this.axios.post<IAuthResponse>(
        "/auth/register",
        data
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async getTasks() {}
  public async getLists() {}
  public async getUserDetails() {}
  public async getTask() {}
  public async getList() {}
  public async toggleTask() {}
  public async updateTask() {}
  public async updateList() {}
}

const useTaskrAPI = new TaskrAPI();

export default useTaskrAPI;
