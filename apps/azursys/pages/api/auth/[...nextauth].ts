import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
      idToken: true,
    }),
  ],
};
export default NextAuth(authOptions);
