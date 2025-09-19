import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import mongoose from 'mongoose'
import User from '@/modules/user'
import bcrypt from 'bcryptjs'

// Tell Next.js this route is dynamic (required for NextAuth)
export const dynamic = 'force-dynamic'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        userName: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.userName || !credentials?.password) return null
        try {
          await mongoose.connect(process.env.MONGODB_URI)
          const dbUser = await User.findOne({ userName: credentials.userName }).select('+password')
          if (!dbUser) return null
          const isPasswordValid = await bcrypt.compare(credentials.password, dbUser.password)
          if (!isPasswordValid) return null

          return {
            id: dbUser._id.toString(),
            email: dbUser.email || null,
            name: dbUser.name || dbUser.userName,
            userName: dbUser.userName || null,
            image: dbUser.image || null,
            firstLogin: !!dbUser.firstLogin,
          }
        } catch (e) {
          console.error('Auth error:', e)
          return null
        }
      }
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      try { await mongoose.connect(process.env.MONGODB_URI) } catch { }

      if (user) {
        token.userId = user.id
        token.userName = user.userName || null
        token.firstLogin = !!user.firstLogin
        token.name = user.name || token.name
        token.picture = user.image || token.picture
        token.email = user.email || token.email
      }

      if (!user && token?.email) {
        const dbUser = await User.findOne({ email: token.email }).lean()
        if (dbUser) {
          token.userId = dbUser._id.toString()
          token.userName = dbUser.userName || null
          token.firstLogin = !!dbUser.firstLogin
          token.name = dbUser.name || token.name
          token.picture = dbUser.image || token.picture
        }
      }

      if (trigger === 'update' && session?.user) {
        token.name = session.user.name ?? token.name
        token.picture = session.user.image ?? token.picture
      }
      return token
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.userId
        session.user.userName = token.userName || null
        session.user.firstLogin = token.firstLogin || false
        session.user.name = token.name || session.user.name
        session.user.image = token.picture || session.user.image
        session.user.email = token.email || session.user.email
      }
      return session
    }
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
