import { createApi, fetchBaseQuery, FetchArgs } from '@reduxjs/toolkit/query/react';

// Function to refresh the access token
const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');

  try {
    console.log("Attempting to refresh access token...");
    const response = await fetch('https://vineoback-gh-qa.caprover2.innogenio.com/graphql', {
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
      baseUrl: 'https://vineoback-gh-qa.caprover2.innogenio.com/graphql',
      prepareHeaders: (headers) => {
        if (initialToken) {
          console.log("Setting Authorization header for request. Token:", initialToken);
          headers.set('Authorization', `Bearer ${initialToken}`);
        }
        return headers;
      },
      credentials: 'include',
    })(args, api, extraOptions);

    // Log the initial request result for debugging
    console.log("Initial request result:", result);
    
    // Type assertion to help TypeScript understand the error structure
    const resultData = result?.data as { errors?: Array<{ extensions?: { response?: { statusCode?: number } } }> };

    // Use the correctly structured path to check for 401
    if (resultData?.errors?.[0]?.extensions?.response?.statusCode === 401) {
      console.warn("Unauthorized error detected. Attempting to refresh token...");
      
      // Attempt to refresh the token
      const newAccessToken = await refreshAccessToken();

      if (newAccessToken) {
        console.log("Retrying API request with new access token:", newAccessToken);
        
        // Retry the request with the new access token
        result = await fetchBaseQuery({
          baseUrl: 'https://vineoback-gh-qa.caprover2.innogenio.com/graphql',
          prepareHeaders: (headers) => {
            if (newAccessToken) {
              headers.set('Authorization', `Bearer ${newAccessToken}`);
            }
            return headers;
          },
          credentials: 'include',
        })(args, api, extraOptions);

        // Handle the retry result
        if (result.error) {
          console.error("Retry with new access token failed:", result.error);

          // Optionally add logic here to clear tokens or perform other actions if retry fails
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/sign-in';
        } else {
          console.log("Retry with new access token successful.");
        }
      } else {
        console.warn("Failed to refresh token. Redirecting to sign-in.");
  
        // Clear tokens and redirect to sign-in as a fallback
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/sign-in';
      }
    } else if (result.error) {
      // Log other non-401 errors for further investigation
      console.error("Request failed with error:", result.error);
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
  }),
});

export const { useLoginUserMutation, useGetBoxHistoryQuery, useGetSubscriptionStatusMutation } = authApi;
