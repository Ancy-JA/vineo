import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL || '';
export const subscriptionApi = createApi({
  reducerPath: 'subscriptionApi',
  baseQuery: fetchBaseQuery({ baseUrl: GRAPHQL_URL }),
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
