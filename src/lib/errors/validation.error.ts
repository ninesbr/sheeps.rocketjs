import {RocketJSError} from "./error";

export class ValidationError extends RocketJSError {
    constructor(code?: string, statusCode?: number, message?: string, details?: any) {
        super("ValidationError", code, statusCode, message, details);
    }

    static withDetails(details: any): ValidationError {
        return new ValidationError(null, null, 'Missing argument', details);
    }
}