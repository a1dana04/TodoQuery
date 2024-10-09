import {
  BaseQueryFn,
  fetchBaseQuery,
  createApi,
} from "@reduxjs/toolkit/query/react";

const baseOuery = fetchBaseQuery({
  baseUrl:
    "https://api.elchocrud.pro/api/v1/a1c329c08bf8839fa310cd6d8ca86cee/todo9",
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseOuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["todo"],
  endpoints: () => ({}),
});
