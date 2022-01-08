import * as mongoose from 'mongoose'

export const WeatherSchema = new mongoose.Schema({
    lat: String,
    lon: String,
    locationName: String,
    stationId: String,
    obsTime: Date,
    weather: String,
    humd: String,
    temp: String,
    city: String,
    citySn: String,
    town: String,
    townSn: String
})