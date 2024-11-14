import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // To load environment variables from a .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);  // Exit process with failure
  }
};

// Change this line to export the function as default
export default connectDB;  // Use default export
