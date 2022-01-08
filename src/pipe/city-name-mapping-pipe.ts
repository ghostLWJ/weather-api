import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { CITY_MAP } from "src/constants";

export class CityNameMappingPipe implements PipeTransform<string, string> {
    transform(value: string, metadata: ArgumentMetadata) {
        for (const [city, translateCity] of Object.entries(CITY_MAP)) {
            if (value === city) { return translateCity; }
            if (value.replace(/[_-\s]/g,"").toUpperCase() === city.toUpperCase()) { return translateCity; }
        }

        return value;
    }
}