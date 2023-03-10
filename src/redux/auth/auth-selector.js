export const getUser = (state) => state.auth.user;
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getIsRefreshing = (state) => state.auth.isRefreshing;
export const getToken = (state) => state.auth.accessToken;
export const getError = (state) => state.auth.error;
export const getFavoriteArray = (state) => state.auth.user?.favorite;
export const getIsLoading = (state) => state.auth.isLoading;
