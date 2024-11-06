import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const subscriptionApi = createApi({
  reducerPath: 'subscriptionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vineoback-gh-qa.caprover2.innogenio.com/graphql' }),
  endpoints: (builder) => ({
    loadSubscriptionListForUser: builder.query({
      query: (type: number[]) => ({
        url: '', // base URL is already set, so empty here
        method: 'POST',
        body: {
          query: `
            query loadSubscriptionListForUser($type: [Float!]!) {
              loadSubscriptionListForUser(type: $type) {
                _id
                title
                sub_title
                amount
                description
                is_current
                renewalDate
                features
              }
            }
          `,
          variables: { type },
        },
      }),
    }),
    getSubscriptionStatus: builder.query({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query getSubscriptionStatus {
              getSubscriptionStatus {
                status
                subscription_id
                type
              }
            }
          `,
        },
      }),
    }),
  }),
});

export const { useLoadSubscriptionListForUserQuery, useGetSubscriptionStatusQuery } = subscriptionApi;
