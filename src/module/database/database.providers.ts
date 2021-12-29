import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'MONGO_CONNECTION',
        useFactory: (): Promise<typeof mongoose> => mongoose.connect('mongodb://localhost/weather')   
    }
]