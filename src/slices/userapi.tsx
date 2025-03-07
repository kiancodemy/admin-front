import { emptySplitApi } from "./apislice";

const userapi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    GetuserById: build.query({
      query: (id: string) => `general/users/${id}`,
      providesTags: ["users"],
    }),
    Getcustomers: build.query({
      query: () => `general/customers`,
    }),
    Getadmin: build.query({
      query: () => `general/admin`,
    }),
    Getproducts: build.query({
      query: () => `client/products`,
      providesTags: ["products"],
    }),
    Getsales: build.query({
      query: () => `sale/sale`,
    }),
    Gettransacations: build.query({
      query: ({ page,sort }) =>
        `client/transactions?page=${page || null}&sort=${
          sort || null
        }`,
    }),
  }),
});

export const {
  useGetuserByIdQuery,
  useGetproductsQuery,
  useGetcustomersQuery,
  useGettransacationsQuery,
  useGetsalesQuery,
  useGetadminQuery
} = userapi;
