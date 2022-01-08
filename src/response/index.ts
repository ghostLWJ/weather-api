export interface Time {
    obsTime: string;
}

export interface WeatherElement {
    elementName: string;
    elementValue: string;
}

export interface Parameter {
    parameterName: string;
    parameterValue: string;
}

export interface Location {
    lat: string;
    lon: string;
    locationName: string;
    stationId: string;
    time: Time;
    weatherElement: WeatherElement[];
    parameter: Parameter[];
}

export interface Records {
    location: Location[];
}

export interface WeatherResponseObject {
    success: string;
    records: Records;
}