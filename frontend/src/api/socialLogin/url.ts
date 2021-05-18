import { baseUrl } from "api/url";

// Social Login
export const LOGIN_GOOGLE_URL: string = `${baseUrl}/auth/google/callback`;
export const LOGIN_KAKAO_URL: string = `${baseUrl}/auth/kakao/callback`;
export const LOGIN_NAVER_URL: string = `${baseUrl}/auth/naver/callback`;

export const SETTING_USER_URL = (id: number) => `${baseUrl}/api/users/${id}`;
