import { Connection } from "mongoose";
import { MONGO_CONNECTION, WEATHER_MODEL } from "../const";
import { WeatherSchema } from "../schemas/weather.schema";

export const weatherProviders = [
    {
        provide: WEATHER_MODEL,
        useFactory: (connection: Connection) => connection.model('Weather', WeatherSchema),
        inject: [MONGO_CONNECTION]
    }
]