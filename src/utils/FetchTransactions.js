import axios from "axios";

export const FetchTransactions = async () => {
  const response = await axios.get(`/api/plaid/accounts/transactions`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
  const data = await response.data;

  return data;
};
