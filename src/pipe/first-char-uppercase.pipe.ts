import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { AnySchema, ObjectSchema } from "joi";

export class FirstCharUppercasePipe implements PipeTransform<string, string> {
    transform(value: string, metadata: ArgumentMetadata) {
        value = value.toLowerCase();
        
        return value.length ? value.charAt(0).toUpperCase() + value.slice(1) : value
    }
}