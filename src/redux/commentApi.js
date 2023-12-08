import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://65735e40192318b7db420419.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addPost: builder.mutation({
      query(data) {
        return {
          url: API_ENDPOINT,
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ["Comments"],
    }),
    updateCommentCount: builder.mutation({
      query(data) {
        return {
          url: `${API_ENDPOINT}/${data.id}`,
          method: 'PUT',
          body: data,
        }
      },
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {useGetPostsQuery, useAddPostMutation, useUpdateCommentCountMutation} = commentApi;
