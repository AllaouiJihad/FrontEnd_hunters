  export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  email: string;
}

export interface User {
  email: string;
}

