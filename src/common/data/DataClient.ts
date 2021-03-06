import axios, { AxiosInstance, AxiosResponse } from "axios";

export default class DataClient {
	private static axios: AxiosInstance = axios.create({
		baseURL: "https://localhost:44389/api",
	});

	public static async Get<T>(uri: string): Promise<AxiosResponse<T>> {
		return await this.axios.get<T>(uri);
	}
}
