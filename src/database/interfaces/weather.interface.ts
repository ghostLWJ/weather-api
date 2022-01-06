export interface Weather extends Document {
    readonly lat: Number;
    readonly lon: Number;
    readonly locationName: String;
    readonly stationId: String;
    readonly obsTime: Date;
    readonly weather: String;
    readonly humd: String;
    readonly temp: String;
    readonly city: String;
    readonly citySn: String;
    readonly town: String;
    readonly townSn: String;
}