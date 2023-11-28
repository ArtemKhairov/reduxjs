import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserState } from "../user";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.org/" }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUserState[], void>({ query: () => "users" }),
  }),
});

export const { useGetUsersQuery } = userApi;
