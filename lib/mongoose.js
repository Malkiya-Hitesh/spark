import mongoose from 'mongoose'

// Cache the connection across hot-reloads in development and across
// serverless invocations. This avoids opening a new connection per request.
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

const connectDB = async () => {
    if (cached.conn) {
        return cached.conn
    }

    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not set')
    }

    if (!cached.promise) {
        // Keep pool size under free-tier connection limits
        const opts = {
            maxPoolSize: 20,
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        }

        cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongooseInstance) => mongooseInstance)
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connectDB;