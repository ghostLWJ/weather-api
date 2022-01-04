export class CreateOrUpdateWeatherDto {
    lat: Number;
    lon: Number;
    locationName: String;
    stationId: String;
    obsTime: Date;
    weather: String;
    humd: String;
    temp: String;
    city: String;
    citySn: String;
    town: String;
    townSn: String
}