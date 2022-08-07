import { AxiosInstance } from "./AxiosInstance";

export const FetchTransactions = async () => {
  const response = await AxiosInstance.get(`/plaid/accounts/transactions`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
  const data = await response.data;

  return data;
};
