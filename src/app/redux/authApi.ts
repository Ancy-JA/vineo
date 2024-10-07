import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vineoback-gh-qa.caprover2.innogenio.com/graphql',
  }),
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: payload => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query userLogin($payload: UserLoginDto!) {
              userLogin(payload: $payload) {
                accessToken
                refreshToken
              }
            }
          `,
          variables: { payload },
        },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
