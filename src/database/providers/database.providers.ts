import * as mongoose from 'mongoose';
import { MONGO_CONNECTION } from '../const';

export const databaseProviders = [
    {
        provide: MONGO_CONNECTION,
        useFactory: (): Promise<typeof mongoose> => mongoose.connect(process.env.MONGO_URL ?? 'mongodb://localhost/weather')   
    }
]