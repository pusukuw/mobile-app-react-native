type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

type AuthToken = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
};

type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
};

type AppState = {
  isLoggedIn: boolean;
  user: User | null;
  authToken: AuthToken | null;
  isLoading: boolean;
  error: string | null;
};

type Theme = 'light' | 'dark';

type NavigationRoute = {
  name: string;
  params?: Record<string, unknown>;
};

type Action<T extends string, P = unknown> = {
  type: T;
  payload?: P;
};

export type {
  User,
  AuthToken,
  ApiResponse,
  PaginatedResponse,
  AppState,
  Theme,
  NavigationRoute,
  Action,
};