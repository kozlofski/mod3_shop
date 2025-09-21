import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'

import { prisma } from '@/prisma/clientSingleton';
import { emailRegex, mobileRegex } from '@/types/regex';
import { verifyPassword } from '@/lib/auth';

const handler = NextAuth({
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/',
    newUser: "/"
  },
  providers: [
    CredentialsProvider({    
    name: 'credentials',
    credentials: {
      emailOrMobile: { label: "Email or Mobile", type: "text", placeholder: "email or mobile" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) { 
      if(!credentials) return null

      const emailOrMobile = credentials.emailOrMobile;
      const password = credentials.password;

      if(!emailOrMobile || !password) return null

      const foundUser = await prisma.user.findFirst({
        where: {OR: [{mobile: emailOrMobile}, {email: emailOrMobile}]}
      })

      if(!foundUser) return null
      
      const passwordCorrect = await verifyPassword(password, foundUser.passwordHash)
      if(passwordCorrect) return {
        ...foundUser,
        id: String(foundUser.id)
      }
      
      return null

    }
  })]
});

export { handler as GET, handler as POST }