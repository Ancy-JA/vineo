import type { GetBoxWinePrintCardResponse } from '@/components/Types';
import { createApi, fetchBaseQuery, FetchArgs } from '@reduxjs/toolkit/query/react';
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL || '';

// Function to refresh the access token
const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  
  try {
    console.log("Attempting to refresh access token...");
    const response = await fetch( GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query getAccessTokenFromRefresh($access: String!, $refresh: String!) {
            getAccessToken(accessToken: $access, refreshToken: $refresh) {
              accessToken
              refreshToken
            }
          }
        `,
        variables: {
          access: accessToken,
          refresh: refreshToken,
        },
      }),
    });

    const data = await response.json();
    console.log('Refresh response:', data);

    if (data?.data?.getAccessToken?.accessToken) {
      const newAccessToken = data.data.getAccessToken.accessToken;
      const newRefreshToken = data.data.getAccessToken.refreshToken;
      console.log("Successfully received new access token:", newAccessToken);

      // Store new tokens
      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);

      return newAccessToken;
    } else {
      console.warn("Failed to refresh token. Redirecting to sign-in.");
      window.location.href = '/sign-in';
    }
  } catch (error) {
    console.error('Failed to refresh token:', error);
    window.location.href = '/sign-in';
  }
  return null;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: async (args: string | FetchArgs, api, extraOptions) => {
    console.log("Making initial API request...");
    let initialToken = localStorage.getItem('accessToken') || undefined;

    // Make the first attempt to use the access token
    let result = await fetchBaseQuery({
      baseUrl:  GRAPHQL_URL,
      prepareHeaders: (headers) => {
        if (initialToken) {
          console.log("Setting Authorization header for request. Token:", initialToken);
          headers.set('Authorization', `Bearer ${initialToken}`);
        }
        return headers;
      },
      credentials: 'include',
    })(args, api, extraOptions);

    // Type assertion to help TypeScript understand the error structure
    const resultData = result?.data as { errors?: Array<{ extensions?: { response?: { statusCode?: number } } }> };
    console.log(resultData?.errors?.[0]?.extensions?.response?.statusCode);
    // Use the correctly structured path to check for 401
    if (resultData?.errors?.[0]?.extensions?.response?.statusCode === 401) {
      console.warn("Unauthorized error detected. Attempting to refresh token...");

      // Attempt to refresh the token
      const newAccessToken = await refreshAccessToken();

      if (newAccessToken) {
        console.log("Retrying API request with new access token:", newAccessToken);

        // Retry the request with the new access token
        result = await fetchBaseQuery({
          baseUrl: GRAPHQL_URL,
          prepareHeaders: (headers) => {
            if (newAccessToken) {
              headers.set('Authorization', `Bearer ${newAccessToken}`);
            }
            return headers;
          },
          credentials: 'include',
        })(args, api, extraOptions);

        // Handle the retry result

      } else {
        console.warn("Failed to refresh token. Redirecting to sign-in.");

        // Clear tokens and redirect to sign-in as a fallback
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/sign-in';
      }
    }
    return result;
  },
  tagTypes: ['BoxHistory'],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (payload) => ({
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
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { accessToken, refreshToken } = data?.userLogin || {};
          if (accessToken) {
            console.log("Login successful. Tokens stored.");
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
          }
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),

    logoutUser: builder.mutation<void, void>({
      queryFn: async () => {
        // Clear tokens from local storage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        // Optional: Redirect to sign-in page
        window.location.href = '/sign-in';

        return { data: undefined };
      },
    }),

    getBoxHistory: builder.query({
      query: (payload) => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query BoxHistory($payload: BoxHistoryDto!) {
              getBoxHistory(payload: $payload) {
                box_count
                boxes {
                  box_id
                  date
                  wines {
                    wine_id
                    wine_name
                    image
                    pair_with
                    philosophy
                    about
                    rating
                    is_reviewed
                    score
                    area
                    store
                  }
                }
              }
            }
          `,
          variables: { payload },
        },
      }),
      providesTags: ['BoxHistory'],
    }),
    getSubscriptionStatus: builder.mutation({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            mutation getSubscriptionStatus {
              getSubscriptionStatus {
                status
              }
            }
          `,
        },
      }),
    }),
    // getBoxWine card mutation

    // In your authApi setup for getBoxWinePrintCard
    getBoxWinePrintCard: builder.mutation<GetBoxWinePrintCardResponse, { boxId: string }>({
      query: ({ boxId }) => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query getBoxWinePrintCard($box: String!) {
              getBoxWinePrintCard(box: $box)
            }
          `,
          variables: { box: boxId },
        },
      }),
    }),
    loadSubscriptionListForUser: builder.query({
      query: ({ type }) => ({
        url: '',
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
                is_early_adaptor
                display_order
                payment_link
                product_id
                duration
                type
                status
                is_current
              }
            }
          `,
          variables: { type },
        },
      }),
    }),
    fetchSubscriptionStatus: builder.mutation({ 
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            mutation getSubscriptionStatus {
              getSubscriptionStatus {
                status
                subscription_id
                type
                start_date
                end_date
                credit_balance
                number_of_boxes
                is_recommended_polling
              }
            }
          `,
        },
      }),
    }),
    
    getLatestUserGift: builder.query<any, void>({ 
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
        query LatestGiftsofUser {
          getLatestUserGift {
            
          }
        }
      `,
        },
      }),
    }),
    getQuestions: builder.query({
      query: () => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query getQuestions {
              getQuestions {
                question
                question_id
                options {
                  id
                  option
                  description
                }
              }
            }
          `,
        },
      }),
    }),
    
    // New `getBoxHistoryAdmin` endpoint for client history
    getBoxHistoryAdmin: builder.query({
      query: ({ searchString, page, pageSize }) => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query getBoxHistoryAdmin($searchString: String!, $page: Float!, $pageSize: Float!) {
              getBoxHistoryAdmin(
                searchString: $searchString
                page: $page
                pageSize: $pageSize
               
              ) {
                total
                boxes {
                  _id
                  user {
                    _id
                    name
                    phone
                  }
                  created_at
                  delivery_date
                  status
                  box_wines {
                    name
                  }
                }
              }
            }
          `,
          variables: { searchString, page, pageSize },
        },
      }),
      providesTags: ['BoxHistory'],

    }),

  }),


});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetBoxHistoryQuery,
  useGetSubscriptionStatusMutation,
  useGetBoxHistoryAdminQuery,
  useGetBoxWinePrintCardMutation,
  useLoadSubscriptionListForUserQuery,
  useFetchSubscriptionStatusMutation,
  useGetLatestUserGiftQuery,
  useGetQuestionsQuery, 
} = authApi;