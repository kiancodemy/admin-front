import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://admin-back-production-2977.up.railway.app/",
  }),
  endpoints: () => ({}),
  tagTypes: ["products", "users"],
});
