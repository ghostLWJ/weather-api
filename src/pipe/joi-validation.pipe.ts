import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

export class JoiValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) { }

    transform(value: any, metadata: ArgumentMetadata) {
        const { error, value: valueSchema } = this.schema.validate(value);
        
        if (error) { throw new BadRequestException(error.details.map(detail => detail.message).join('\n')); }

        return valueSchema;
    }
}