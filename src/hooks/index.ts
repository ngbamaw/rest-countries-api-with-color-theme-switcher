import { useQuery } from "react-query";

import api from "../api";
import { Params } from "../types";

export const useCountries = (params: Params = { value: "" }) => {
  return useQuery(["countries", params], () => api.getCountries(params));
};
