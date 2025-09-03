import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB() {
  if (isConnected) return mongoose.connection;
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/misscheesecake';
  if (!uri) throw new Error('MONGO_URI not defined');
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri, {
      autoIndex: true,
      maxPoolSize: 10
    });
    isConnected = true;
    console.log('MongoDB connected');
    return mongoose.connection;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    throw err;
  }
}

export function disconnectDB() {
  return mongoose.connection.close();
}
