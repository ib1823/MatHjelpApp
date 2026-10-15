import mongoose from 'mongoose';

export async function connectToDatabase(connectionString: string) {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to MongoDB');
  } catch (error: unknown) {
    console.error('MongoDB connection failed', error);
    throw error;
  }
}
