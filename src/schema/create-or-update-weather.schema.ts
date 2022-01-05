import * as Joi from "joi";

export const createOrUpdateWeatherSchema = Joi.object({
    lat: Joi.number().required(),
    lon: Joi.number().required(),
    locationName: Joi.string().required(),
    stationId: Joi.string().required(),
    obsTime: Joi.date().required(),
    weather: Joi.string().required(),
    humd: Joi.string().required(),
    temp: Joi.string().required(),
    city: Joi.string().required(),
    citySn: Joi.string().required(),
    town: Joi.string().required(),
    townSn: Joi.string().required()
})