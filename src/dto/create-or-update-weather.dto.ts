import { knownHookEvents } from 'got/dist/source';
import { WEATHER_EXTRACT_FAILED } from 'src/constants';
import { Z_DEFAULT_STRATEGY } from 'zlib';
import { Location } from '../response'

export class CreateOrUpdateWeatherDto {
    lat: String;
    lon: String;
    locationName: String;
    stationId: String;
    obsTime: Date;
    weather: String;
    humd: String;
    temp: String;
    city: String;
    citySn: String;
    town: String;
    townSn: String;

    static fromWeatherAPIResponseLocation(location: Location) {
        const self = new CreateOrUpdateWeatherDto();

        self.lat = location.lat;
        self.lon = location.lon;
        self.locationName = location.locationName;
        self.stationId = location.stationId;
        self.obsTime = new Date(location.time.obsTime); // follow server timezone, and mongodb ISODate?

        const weatherEl = location.weatherElement.find(weatherEl => weatherEl.elementName === 'Weather');
        const weatherHumdEl = location.weatherElement.find(weatherEl => weatherEl.elementName === 'HUMD');
        const weatherTempEl = location.weatherElement.find(weatherEl => weatherEl.elementName === 'TEMP');
        const parameterCity = location.parameter.find(parameter => parameter.parameterName === 'CITY');
        const parameterCitySn = location.parameter.find(parameter => parameter.parameterName === 'CITY_SN');
        const parameterTown = location.parameter.find(parameter => parameter.parameterName === 'TOWN');
        const parameterTownSn = location.parameter.find(parameter => parameter.parameterName === 'TOWN_SN');

        self.weather = weatherEl?.elementValue ?? WEATHER_EXTRACT_FAILED;
        self.humd = weatherHumdEl?.elementValue ?? WEATHER_EXTRACT_FAILED;
        self.temp = weatherTempEl?.elementValue ?? WEATHER_EXTRACT_FAILED;
        self.city = parameterCity?.parameterValue ?? WEATHER_EXTRACT_FAILED;
        self.citySn = parameterCitySn?.parameterValue ?? WEATHER_EXTRACT_FAILED;
        self.town = parameterTown?.parameterValue ?? WEATHER_EXTRACT_FAILED;
        self.townSn = parameterTownSn?.parameterValue ?? WEATHER_EXTRACT_FAILED;

        return self;
    }
}