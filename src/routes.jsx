import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NaverProvider from "@auth/naver-provider";
import KakaoProvider from "@auth/kakao-provider";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // 여기에 실제 인증 로직을 구현해야 합니다.
        // 예시로 하드코딩된 사용자를 반환합니다.
        if (credentials && credentials.username === "user" && credentials.password === "password") {
          return { id: "1", name: "User", email: "user@example.com" };
        }
        return null;
      },
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
